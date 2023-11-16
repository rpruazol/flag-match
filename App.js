import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flag from './components/Flag'
import {countries} from './assets/countries'

export default function App() {
  // const random = an array of 6 pairs of numbers
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {random.forEach(num => {
        return <Flag flag={countries[num]}/>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 400,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
