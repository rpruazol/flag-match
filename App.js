import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flag from './components/Flag'
import {countries} from './assets/countries'
import {randomPairs, shuffleArray} from './helper/random.js';

export default function App() {
  const arr = shuffleArray(randomPairs(4, 4))
  console.log(arr)
  console.log(countries)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {arr.map(num => {
        return <Flag flag={countries[num].uri}/>
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
