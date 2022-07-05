import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  console.log(require('./assets/favicon.png'))
  return (
    <View style={styles.container}>
      <Text style={stylesText.container}>Hello world!</Text>
      <Image source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300',
      }}
        // blurRadius={10}
        fadeDuration={1000}
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const stylesText = StyleSheet.create({
  container: {
    color: 'white'
  },
});
