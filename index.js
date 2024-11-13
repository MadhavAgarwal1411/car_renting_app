/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Home from './App';

Text.defaultProps = {maxFontSizeMultiplier: 1.5};
TextInput.defaultProps = {maxFontSizeMultiplier: 1.3};

AppRegistry.registerComponent(appName, () => Home);