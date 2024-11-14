/**
 * @format
 */

import {AppRegistry, Text, TextInput} from 'react-native';
import {name as appName} from './app.json';
import Home from './App';

Text.defaultProps = {allowFontScaling: true ,maxFontSizeMultiplier: 1.1};

TextInput.defaultProps = {allowFontScaling: true ,maxFontSizeMultiplier: 1};

AppRegistry.registerComponent(appName, () => Home);