import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { generateStyle } from './StyleGenerator';

const { width, height } = Dimensions.get('window');

const generateObjectGrid = ({
  objects,
  collectedItems,
  onPress,
  collect,
  toggleMultiple,
  recieve,
}) => {
  return (
    <View style={{ width, height }}>
      {objects.navMap.map((item, i) => (
        /* ((item.hasOwnProperty('showWhen') && [].findIndex(item.showWhen)) || item.hasOwnProperty('showWhen'))
          && ( */
            <TouchableOpacity
              key={`scene${i}`}
              style={generateStyle(styles.itemStyle, {
                x: item.x,
                y: item.y,
                width: item.width,
                height: item.height,
              })}
              onPress={() => onPress(item.route)}
            >
              <Text style={{ color: 'green' }}>{item.route}</Text>
            </TouchableOpacity>
          // )
      ))}
      {objects.itemsMap.map((item, i) => {
        const index = collectedItems.findIndex((element) => element.id === item.id);
        if (index > -1 && (item.hasOwnProperty('type') && item.type !== 'reciever')) return false;
        return (
          <View>
            {item.type === 'reciever' && (
              <TouchableOpacity
                key={`item${i}`}
                style={generateStyle(styles.itemStyle, {
                  x: item.x,
                  y: item.y,
                  width: item.width,
                  height: item.height,
                })}
                onPress={() => recieve(item.expectedId)}
              >
                <Text style={{ color: 'red' }}>{item.name}</Text>
              </TouchableOpacity>
            )}
            {item.collectable && (
              <TouchableOpacity
                key={`item${i}`}
                style={generateStyle(styles.itemStyle, {
                  x: item.x,
                  y: item.y,
                  width: item.width,
                  height: item.height,
                })}
                onPress={() => collect(item)}
              >
                <Text style={{ color: 'green' }}>{item.name}</Text>
              </TouchableOpacity>
            )}
            {item.multiple && (
              <TouchableOpacity
                key={`item${i}`}
                style={generateStyle(styles.itemStyle, {
                  x: item.x,
                  y: item.y,
                  width: item.width,
                  height: item.height,
                })}
                onPress={() => toggleMultiple(item)}
              >
                <Text style={{ color: 'blue' }}>{item.name}</Text>
              </TouchableOpacity>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { generateObjectGrid };
