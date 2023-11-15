import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flag from './components/Flag'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your apasdfp!</Text>
      <StatusBar style="auto" />
      <Flag/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
