import React from 'react';
import {
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import { SCENES, INITIAL_SCREEN } from '../configs/scenes';
import { generateObjectGrid } from './GridGenerator';
import Inventory from '../components/Inventory';

const { width, height } = Dimensions.get('window');

function screenGenerator(scene) {
  return class ScreenGenerator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: scene.name,
        bg: scene.bg,
        collectedItems: [],
        inventoryOpen: false,
        loading: true,
        scene: { ...scene },
      };

      this.getCollectedItems();
    }

    async getCollectedItems() {
      const inventoryRaw = await AsyncStorage.getItem('inventory');
      if (inventoryRaw) {
        const inventory = JSON.parse(inventoryRaw);
        this.setState({ collectedItems: inventory, loading: false });
      } else {
        this.setState({ collectedItems: [], loading: false });
      }
    }

    onPress = route => {
      const { navigation } = this.props;
      navigation.navigate(route);
    }

    collect = async item => {
      const { collectedItems } = this.state;
      await AsyncStorage.setItem('inventory', JSON.stringify([...collectedItems, item]));
      this.setState({ collectedItems: [...collectedItems, item] });
    }

    toggleMultiple = async item => {
      const { scene } = this.state;
      const { objects } = scene;
      const objectsModified = { ...objects };

      let newChar;
      if (item.multiple.indexOf(item.name) + 1 < item.multiple.length) {
        newChar = item.multiple[item.multiple.indexOf(item.name) + 1];
      } else {
        newChar = item.multiple[0];
      }

      const group = await AsyncStorage.getItem(item.group);
      const parts = objectsModified.itemsMap.filter(object => object.group === item.group && object);

      let groupCorrect = true;
      for (let part of parts) {
        if (part.name != part.correct) {
          groupCorrect = false;  
          break;
        }
      }

      if (groupCorrect) return;

      let groupParsed = [];
      if (group) {
        groupParsed = JSON.parse(group);
      }

      const groupMatch = groupParsed.findIndex(elem => elem.id === item.id && elem);

      if (groupMatch > -1) {
        groupParsed[groupMatch] = { ...item, name: newChar };
      } else {
        groupParsed.push({ ...item, name: newChar });
      }

      await AsyncStorage.setItem(item.group, JSON.stringify(groupParsed));

      const itemMatch = objectsModified.itemsMap.findIndex(elem => elem.id === item.id && elem);

      if (itemMatch > -1) {
        objectsModified.itemsMap[itemMatch] = { ...item, name: newChar };
      }

      this.setState({ scene: { ...scene, objects: objectsModified } });
    }

    render() {
      const {
        bg,
        collectedItems,
        inventoryOpen,
        loading,
      } = this.state;
      const { objects } = this.state.scene;
      return (
        <ImageBackground source={{ uri: bg }}
          style={{
            height,
            width,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!loading && generateObjectGrid({
            objects,
            collectedItems,
            onPress: this.onPress,
            collect: this.collect,
            toggleMultiple: this.toggleMultiple,
          })}
          <Inventory open={inventoryOpen} collectedItems={collectedItems} onPress={() => this.setState({inventoryOpen: !inventoryOpen })} />
          <TouchableOpacity
            style={{ position: 'absolute', top: 80, right: 30 }}
            onPress={async () => {
              await AsyncStorage.removeItem('inventory');
              this.setState({ collectedItems: [] });
            }}
          >
            <Text style={{ color: 'purple' }}>C</Text>
          </TouchableOpacity>
        </ImageBackground>
      );
    }
  };
}

const generateAllScreens = () => Object.values(SCENES).reduce((obj, scene) => ({ ...obj, [scene.name]: screenGenerator(scene) }), {});
const Screens = () => generateAllScreens();
const InitialScreen = INITIAL_SCREEN;

export { Screens, InitialScreen };
