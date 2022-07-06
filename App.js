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

export default function App() {
  console.log(useDimensions())
  console.log(useDeviceOrientation())
  const { landscape } = useDeviceOrientation()

  return (
    <View style={{ backgroundColor: '#333', width: '100%', height: landscape ? '100%' : '30%' }}>
      <Text style={{ color: 'white', padding: 16 }}>oi</Text>
      <StatusBar style="auto" />
    </View>
  )

  // return (
  //   <SafeAreaView style={[styles.container, viewStyles.container]}>
  //     <Button
  //       color="dodgerblue"
  //       title='click me'
  //       // onPress={() => Alert.prompt('Título', 'Mensagem', text => console.log(text))}
  //       onPress={() => Alert.alert('Título', 'Mensagem', [
  //         { text: 'Yes', onPress: () => alert(':)') },
  //         { text: 'No', onPress: () => alert(':(') },
  //       ])}
  //     />
  //     {/* <Text style={stylesText.container}>Hello world!</Text> */}
  //     {/* <TouchableWithoutFeedback onPress={() => console.log('teste')}> */}
  //     {/* <TouchableOpacity> */}
  //     {/* <TouchableNativeFeedback >
  //       <View style={{ width: 100, height: 50, backgroundColor: 'dodgerblue' }} />
  //     </TouchableNativeFeedback> */}
  //     {/* <TouchableHighlight onPress={() => console.log('oi')}>
  //       <Image source={{
  //         width: 200,
  //         height: 300,
  //         uri: 'https://picsum.photos/200/300',
  //       }}
  //         // blurRadius={10}
  //         fadeDuration={1000}
  //       />
  //     </TouchableHighlight> */}
  //     {/* </TouchableOpacity> */}
  //     {/* </TouchableWithoutFeedback> */}
  //     {/* <StatusBar style="auto" /> */}
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
});

const viewStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ffdf00'
  },
});

const stylesText = StyleSheet.create({
  container: {
    color: 'white'
  },
});
