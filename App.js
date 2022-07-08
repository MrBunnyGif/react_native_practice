// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  TouchableNativeFeedback,
  Text,
  View,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import Welcome from './app/screens/Welcome';
import ViewImage from './app/screens/ViewImage';

export default function App() {

  return <ViewImage />
}

