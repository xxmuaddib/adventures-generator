import _ from 'lodash';
import React from 'react';
import {
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { Audio } from 'expo-av';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components';

import { SCENES, INITIAL_SCREEN } from '../configs/scenes';
import { pointX, pointY } from './StyleGenerator';
import { ObjectGrid } from './GridGenerator';
import { Inventory } from '../components/Inventory';
import { Dialog } from '../components/Dialog';
import { Paper } from '../components/Paper';
import { MainMenuModal } from '../components/MainMenuModal';
import { PlatformSpecificMeasurement } from './PlatformSpecificUtils';
import { setStateAction } from './ReducersGenerator';
import { ScenePropTypes } from '../proptypes/ScenePropTypes';
import {
  ObjectPropTypes,
  PaperPropType,
  DialogPropType,
} from '../proptypes/ObjectGridPropTypes';
import { internationalizeScene } from '../localization';
import { arrayIncludesSorted } from './Utils';

const { width, height } = Dimensions.get('window');

function screenGenerator(scene) {
  class ScreenGenerator extends React.PureComponent {
    componentDidMount() {
      const { setState } = this.props;
      const sceneCopy = _.cloneDeep(scene);
      //internationalizeScene(sceneCopy);
      console.log(sceneCopy);

      setState(
        {
          scene: sceneCopy,
          originalScene: sceneCopy,
        },
        scene.name,
      );

      this.loadCollectedItems();
      this.loadMultipleItems();
      this.loadSequenceItems();
      this.loadResolved();
    }

    loadResolved = async () => {
      const { setState } = this.props;
      const SavedResolvedRaw = await AsyncStorage.getItem('resolved');
      if (SavedResolvedRaw) {
        const SavedResolved = JSON.parse(SavedResolvedRaw);
        setState({ resolved: SavedResolved });
      }
    };

    loadCollectedItems = async () => {
      const { setState } = this.props;
      const inventoryRaw = await AsyncStorage.getItem('inventory');
      if (inventoryRaw) {
        const inventory = JSON.parse(inventoryRaw);
        setState({ collectedItems: inventory, loading: false });
      } else {
        setState({ collectedItems: [], loading: false });
      }
    };

    loadSequenceItems = async () => {
      const {
        currentScene,
        currentScene: {
          scene: { objects },
        },
        setState,
      } = this.props;

      const objectsCopy = { ...objects };

      if (objectsCopy.describers) {
        objectsCopy.describers.forEach(async d => {
          const describerRaw = await AsyncStorage.getItem(d.group);
          const describer = JSON.parse(describerRaw);
          if (describer) {
            const i = objectsCopy.describers.findIndex(
              el => el.group === describer.group,
            );
            if (i > -1) {
              objectsCopy.describers[i] = describer;
            }
            setState(
              {
                scene: {
                  ...currentScene,
                  objects: {
                    ...objects,
                    describers: objectsCopy.describers,
                  },
                },
              },
              currentScene.scene.name,
            );
          }
        });
      }
    };

    loadMultipleItems = async () => {
      const {
        currentScene,
        currentScene: {
          scene: { objects },
        },
        setState,
      } = this.props;

      const objectsCopy = { ...objects };

      if (objectsCopy.itemsMap) {
        const groups = objectsCopy.itemsMap.filter(
          el => el.type === 'multiple',
        );
        const unique = [...new Set(groups.map(item => item.group))];
        unique.forEach(async g => {
          const groupRaw = await AsyncStorage.getItem(g);
          const group = JSON.parse(groupRaw);
          if (group) {
            group.forEach(item => {
              const i = objectsCopy.itemsMap.findIndex(el => el.id === item.id);
              if (i > -1) {
                objectsCopy.itemsMap[i] = item;
              }
            });
          }
          setState(
            {
              scene: {
                ...currentScene,
                itemsMap: objectsCopy.itemsMap,
              },
            },
            currentScene.scene.name,
          );
        });
      }
    };

    reset = async () => {
      const {
        currentScene: {
          scene: { objects, name: sceneName },
          originalScene,
        },
        setState,
      } = this.props;

      await AsyncStorage.removeItem('inventory');
      setState({ collectedItems: [] });
      if (objects.itemsMap) {
        const groups = objects.itemsMap.filter(el => el.type === 'multiple');
        const unique = [...new Set(groups.map(item => item.group))];
        unique.forEach(async g => {
          await AsyncStorage.removeItem(g);
        });
        await AsyncStorage.removeItem('resolved');
        setState({ scene: _.cloneDeep(originalScene) }, sceneName);
        setState({ resolved: [], dialogAnswer: '', loading: true });
        setState({ loading: false });
      }

      this.openMainMenu();
    };

    onRoutePress = route => {
      const { navigation } = this.props;
      navigation.navigate(route);
    };

    collect = async item => {
      const { collectedItems, setState } = this.props;
      if (item.sound) {
        const soundObject = new Audio.Sound();
        try {
          await soundObject.loadAsync(item.sound.soundName);
          await soundObject.playAsync(item.sound.soundName);
        } catch (e) {
          console.error(e);
        }
      }
      await AsyncStorage.setItem(
        'inventory',
        JSON.stringify([...collectedItems, item]),
      );
      setState({ collectedItems: [...collectedItems, item] });
    };

    receive = async expectedValue => {
      const {
        resolved,
        currentScene: {
          scene: { objects },
        },
        collectedItems,
        setState,
      } = this.props;
      const receiveElement = objects.itemsMap.find(
        el => el.logical.expectedValue === expectedValue,
      );
      const selectedItemId = await AsyncStorage.getItem('selectedItem');
      if (expectedValue === selectedItemId) {
        await AsyncStorage.removeItem('selectedItem');

        const receiverResolved = objects.itemsMap.find(
          el => el.type === 'receiver',
        );
        if (receiverResolved) {
          if (
            receiverResolved.sound &&
            receiverResolved.sound.resolvedSoundName
          ) {
            const soundObject = new Audio.Sound();
            try {
              await soundObject.loadAsync(
                receiverResolved.sound.resolvedSoundName,
              );
              await soundObject.playAsync(
                receiverResolved.sound.resolvedSoundName,
              );
            } catch (e) {
              console.eroor(e);
            }
          }
          this.setState(p => ({
            resolved: [...p.resolved, receiverResolved.id],
          }));
          await AsyncStorage.setItem(
            'resolved',
            JSON.stringify([...resolved, receiverResolved.id]),
          );

          const collectedItemsCopy = [...collectedItems];

          const index = collectedItemsCopy.findIndex(
            item => item.id === selectedItemId,
          );

          if (index !== -1 && collectedItemsCopy[index].logical) {
            collectedItemsCopy[index].logical.countOfUse -= 1;
          }

          setState({ collectedItems: collectedItemsCopy });

          await AsyncStorage.setItem(
            'inventory',
            JSON.stringify(collectedItemsCopy),
          );
        }
      } else if (receiveElement.sound && receiveElement.sound.soundName) {
        const soundObject = new Audio.Sound();
        try {
          await soundObject.loadAsync(receiveElement.sound.soundName);
          await soundObject.playAsync(receiveElement.sound.soundName);
        } catch (e) {
          console.eroor(e);
        }
      }
    };

    handleSequence = async (group, id) => {
      const {
        currentScene: {
          scene: {
            objects: { itemsMap },
          },
        },
        tmp,
        resolved,
        setState,
      } = this.props;

      const mainSequence = itemsMap.find(
        item => item.group === group && item.main,
      );

      const scenario =
        mainSequence && mainSequence.logical && mainSequence.logical.scenario;
      if (!scenario) return false;

      if (!tmp[mainSequence.group]) {
        setState({
          tmp: {
            ...tmp,
            [mainSequence.group]: [],
          },
        });
      }

      const currentSequence = tmp[mainSequence.group]
        ? [...tmp[mainSequence.group], id]
        : [id];

      if (arrayIncludesSorted(scenario, currentSequence)) {
        await AsyncStorage.setItem(
          'resolved',
          JSON.stringify([...resolved, group]),
        );
        return setState({
          resolved: [...resolved, group],
        });
      }

      setState({
        tmp: {
          ...tmp,
          [mainSequence.group]: currentSequence,
        },
      });
    };

    toggleMultiple = async item => {
      //       const {
      //         scene: { objects },
      //         resolved,
      //       } = this.state;
      //
      //       const objectsModified = { ...objects };
      //
      //       const match = item.multiple.findIndex(el => el.id === item.selected);
      //
      //       const index = match + 1 < item.multiple.length ? match + 1 : 0;
      //       const newSelected = item.multiple[index];
      //
      //       const group = await AsyncStorage.getItem(item.group);
      //       let parts = objectsModified.itemsMap.filter(
      //         object => object.group === item.group && object,
      //       );
      //       let groups = parts.map(el => {
      //         if (el.selected === el.correct) return true;
      //         return false;
      //       });
      //
      //       let groupCorrect = groups.every(el => el === true);
      //       let groupParsed = [];
      //       if (group) {
      //         groupParsed = JSON.parse(group);
      //       }
      //
      //       if (groupCorrect) {
      //         return;
      //       }
      //
      //       const groupMatch = groupParsed.findIndex(
      //         elem => elem.id === item.id && elem,
      //       );
      //
      //       if (groupMatch > -1) {
      //         groupParsed[groupMatch] = { ...item, selected: newSelected.id };
      //       } else {
      //         groupParsed.push({ ...item, selected: newSelected.id });
      //       }
      //
      //       await AsyncStorage.setItem(item.group, JSON.stringify(groupParsed));
      //
      //       const itemMatch = objectsModified.itemsMap.findIndex(
      //         elem => elem.id === item.id && elem,
      //       );
      //
      //       if (itemMatch > -1) {
      //         objectsModified.itemsMap[itemMatch] = {
      //           ...item,
      //           selected: newSelected.id,
      //         };
      //       }
      //
      //       parts = objectsModified.itemsMap.filter(
      //         object => object.group === item.group && object,
      //       );
      //       groups = parts.map(el => {
      //         if (el.selected === el.correct) return true;
      //         return false;
      //       });
      //
      //       groupCorrect = groups.every(el => el === true);
      //       groupParsed = [];
      //       if (group) {
      //         groupParsed = JSON.parse(group);
      //       }
      //
      //       this.setState({ scene: { ...scene, objects: objectsModified } });
      //
      //       if (groupCorrect) {
      //         this.setState({
      //           resolved: [...resolved, objectsModified.itemsMap[itemMatch].group],
      //         });
      //         await AsyncStorage.setItem(
      //           'resolved',
      //           JSON.stringify([
      //             ...resolved,
      //             objectsModified.itemsMap[itemMatch].group,
      //           ]),
      //         );
      //       }
    };

    openMainMenu = () => {
      const { setState, mainMenuVisible } = this.props;
      setState({ mainMenuVisible: !mainMenuVisible });
    };

    openInventory = () => {
      const { setState, inventoryOpen } = this.props;
      setState({ inventoryOpen: !inventoryOpen });
    };

    openPaper = (paperModalContent = null) => {
      const { setState, paperModalVisible } = this.props;
      setState({
        paperModalVisible: !paperModalVisible,
        paperModalContent,
      });
    };

    onDragRelease = async (evt, g, id) => {
      const {
        currentScene: {
          scene: { objects },
        },
        resolved,
        setState,
      } = this.props;
      const moveX = g.moveX / pointX;
      const moveY = g.moveY / pointY;
      const receiver = objects.itemsMap.find(
        item => item.logical && item.logical.expectedValue === id,
      );
      if (
        moveX > receiver.position.x &&
        moveX < receiver.position.x + receiver.position.width &&
        moveY > receiver.position.y &&
        moveY < receiver.position.y + receiver.position.height
      ) {
        setState({ resolved: [...resolved, id] });
        await AsyncStorage.setItem(
          'resolved',
          JSON.stringify([...resolved, id]),
        );
      }
    };

    showDialog = (item = null) => {
      const { dialogModalVisible, setState } = this.props;
      setState({
        dialogModalVisible: !dialogModalVisible,
        dialogModalContent: item,
        originalDialogContent: item,
        dialogAnswer: item.character,
      });
    };

    showDialogAnswer = item => {
      const { setState } = this.props;
      setState({
        dialogModalContent: { ...item, questionsShouldBeShown: true },
      });
    };

    setDialog = async item => {
      const { resolved, originalDialogContent, setState } = this.props;
      if (item.resolve) {
        setState({ resolved: [...resolved, item.resolve] });
        await AsyncStorage.setItem(
          'resolved',
          JSON.stringify([...resolved, item.resolve]),
        );
      }
      setState({
        dialogModalContent: item.dialog ? item : originalDialogContent,
        dialogAnswer: item.character,
      });
    };

    render() {
      const {
        collectedItems,
        inventoryOpen,
        loading,
        mainMenuVisible,
        paperModalVisible,
        dialogModalVisible,
        paperModalContent,
        dialogModalContent,
        dialogAnswer,
        resolved,
        currentScene: { objects, bg },
      } = this.props;
      return (
        <SceneBackground source={bg}>
          {!loading && (
            <ObjectGrid
              objects={objects}
              collectedItems={collectedItems}
              onRoutePress={this.onRoutePress}
              collect={this.collect}
              receive={this.receive}
              handleSequence={this.handleSequence}
              toggleMultiple={this.toggleMultiple}
              showModal={this.openPaper}
              onDragRelease={this.onDragRelease}
              showDialog={this.showDialog}
              resolved={resolved}
            />
          )}
          <MainMenuButton onPress={this.openMainMenu}>
            <FontAwesome name="gear" size={20} color="#664422" />
          </MainMenuButton>
          <Inventory
            open={inventoryOpen}
            collectedItems={collectedItems}
            onPress={this.openInventory}
            receive={this.receive}
            objects={objects}
          />
          <MainMenuModal
            mainMenuVisible={mainMenuVisible}
            openMainMenu={this.openMainMenu}
            reset={this.reset}
          />
          {paperModalContent && (
            <Paper
              paperModalVisible={paperModalVisible}
              paperModalContent={paperModalContent}
              openPaper={this.openPaper}
            />
          )}
          {dialogModalContent && (
            <Dialog
              dialogModalVisible={dialogModalVisible}
              dialogModalContent={dialogModalContent}
              dialogAnswer={dialogAnswer}
              resolved={resolved}
              setDialog={this.setDialog}
              showDialog={this.showDialog}
              showDialogAnswer={this.showDialogAnswer}
            />
          )}
        </SceneBackground>
      );
    }
  }
  ScreenGenerator.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    setState: PropTypes.func.isRequired,
    currentScene: ScenePropTypes.isRequired,
    resolved: PropTypes.arrayOf(PropTypes.string).isRequired,
    collectedItems: PropTypes.arrayOf(ObjectPropTypes).isRequired,
    inventoryOpen: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    mainMenuVisible: PropTypes.bool.isRequired,
    paperModalVisible: PropTypes.bool.isRequired,
    dialogModalVisible: PropTypes.bool.isRequired,
    paperModalContent: PaperPropType.isRequired,
    dialogModalContent: DialogPropType.isRequired,
    originalDialogContent: DialogPropType.isRequired,
    dialogAnswer: PropTypes.string.isRequired,
    tmp: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  };

  const mapStateToProps = ({ app, [scene.name]: currentScene }) => ({
    currentScene,
    resolved: app.resolved,
    collectedItems: app.collectedItems,
    inventoryOpen: app.inventoryOpen,
    loading: app.loading,
    mainMenuVisible: app.mainMenuVisible,
    paperModalVisible: app.paperModalVisible,
    dialogModalVisible: app.dialogModalVisible,
    paperModalContent: app.paperModalContent,
    dialogModalContent: app.dialogModalContent,
    originalDialogContent: app.originalDialogContent,
    dialogAnswer: app.dialogAnswer,
    tmp: app.tmp,
  });

  const mapDispatchToProps = {
    setState: setStateAction,
  };

  return connect(mapStateToProps, mapDispatchToProps)(ScreenGenerator);
}

const SceneBackground = styled(ImageBackground)`
  height: ${height}px;
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;

const MainMenuButton = styled(TouchableOpacity)`
  position: absolute;
  top: ${PlatformSpecificMeasurement(20)};
  left: 20px;
`;

const generateAllScreens = () =>
  Object.values(SCENES).reduce(
    (obj, scene) => ({ ...obj, [scene.name]: screenGenerator(scene) }),
    {},
  );
const Screens = () => generateAllScreens();
const InitialScreen = INITIAL_SCREEN;

export { Screens, InitialScreen };
export default screenGenerator;
