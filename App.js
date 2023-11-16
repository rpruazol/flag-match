import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flag from './components/Flag'
import {countries} from './assets/countries'

console.log(countries)
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Flag flag={countries.america}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
