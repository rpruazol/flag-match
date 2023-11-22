import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Flag from './components/Flag'
import {countries} from './assets/countries'
import {randomPairs, shuffleArray} from './helper/random.js';
import {useEffect, useState} from 'react';

export default function App() {
 
  const flagArray = shuffleArray(randomPairs(4, 307)).map((num, idx) => {
    return {
      id: idx,
      value: countries[num],
      isFlipped: false,
      matched: false
    }
  })
  const [cards, setCards] = useState(flagArray);
  const [flippedCount, setFlippedCount] = useState(0)
  const [firstFlippedCard, setFirstFlippedCard] = useState(null);
  
  useEffect(() => {
    if (flippedCount % 2 === 0 && firstFlippedCard) {
      const secondCard = cards.find((card) => card.isFlipped && !card.matched);
      if (secondCard && secondCard.value !== firstFlippedCard.value) {
        // Cards do not match, flip them back
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.isFlipped ? { ...card, isFlipped: false } : card
            )
          );
        }, 1000);
      }
    }
  }, [flippedCount]);


  const handleOnPress = (id) => {
    setFlippedCount(flippedCount + 1);

    setCards((prevCards) => {
      prevCards.map((card) => {
        card.id === id ? {...card, isFlipped: true}: card
      })
    })

    if (flippedCount % 2 === 0) {
      setFirstFlippedCard(cards.find((card) => card.isFlipped))
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {cards.map(flag => {
        return <Flag 
        flag={flag}
        handleOnPress={handleOnPress}
        isFlipped={flag.isFlipped}
        />
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
