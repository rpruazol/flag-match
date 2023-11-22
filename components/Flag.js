import React, {useEffect, useState} from "react";
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
    position: "absolute",
    margin: 3
  },
  imageBack: {
    width: 125,
    height: 75,
    backfaceVisibility: "hidden",
    margin: 3
  }
});

const Flag = (props) => {
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

  const flipToFront = (flag) => {
    console.log('flip to front!',  flag)
    Animated.timing( flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,

    }
      ).start();
  }
  const flipToBack = () => {
    // console.log('flip to back!', e.target.value)
    Animated.timing( flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }
      ).start();
  }

  return (
    <View >
      <Pressable onPress={() => {
        props.handleOnPress
        flipToFront(props.flag)
      }}>
        <Animated.Image
          
          style={{...styles.imageFront, ...flipToBackStyle}}
          source={{
            uri: `https://flagcdn.com/160x120/${props.flag.value.code}.png`
          }}       
        />
        <Animated.Image
          style={{...styles.imageBack, ...flipToFrontStyle}}
          source={require("../assets/mystery.bmp")}

        />
      </Pressable>
    </View>
  );
};


export default Flag;
