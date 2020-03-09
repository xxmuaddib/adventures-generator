import React from 'react';
import { YellowBox } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Screens, InitialScreen } from './src/helpers/ScreenGenerator';

YellowBox.ignoreWarnings(['Warning:']);

const SwitchNavigator = createSwitchNavigator(Screens(), {
	initialRouteName: InitialScreen,
});

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
