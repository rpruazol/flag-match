import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Pressable,
  Image,
  Animated
} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  imageFront: {
    width: 125,
    height: 75,
    position: "absolute"
  },
  imageBack: {
    width: 125,
    height: 75,
    backfaceVisibility: "hidden"
  }
});

const Flag = (props) => {
  console.log('HUH')
  const [flipRotation, setFlipRotation] = React.useState(0)
  const flipAnimation = React.useRef(new Animated.Value(0)).current;
  
  flipAnimation.addListener( ( { value } ) => setFlipRotation(value) );

  

  const flipToFrontStyle = {
    transform: [
      { rotateY: flipAnimation.interpolate( {
        inputRange: [0, 180],
        outputRange: ["0deg", "180deg"]
      })}
    ]
  }

  const flipToBackStyle = {
    transform: [
      { rotateY: flipAnimation.interpolate( {
        inputRange: [0, 180],
        outputRange: ["180deg", "360deg"]
      })}
    ]
  }

  const flipToFront = () => {
    console.log('flip to front!')
    Animated.timing( flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,

    }
      ).start();
  }

  const flipToBack = () => {
    console.log('flip to back!')
    Animated.timing( flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }
      ).start();
  }
  console.log(props.flag.uri)
  return (
    <View >
      <Pressable onPress={() => !!flipRotation ? flipToBack() : flipToFront()}>
        <Animated.Image
          style={{...styles.imageFront, ...flipToBackStyle}}
          source={require("../assets/mystery.bmp")}
        />
        <Animated.Image
          style={{...styles.imageBack, ...flipToFrontStyle}}
          source={props.flag.uri}
        />
      </Pressable>
    </View>
  );
};


export default Flag;
