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

const Flag = () => {

  const flipAnimation = React.useRef(new Animated.Value(0)).current;
  flipAnimation.addListener(({value}) => flipRotation = value)

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
  return (
    <View >
      <Pressable onPress={() => Alert.alert("Simple Button pressed")}>
        <Image
          style={styles.imageFront}
          source={require("../assets/6wz5zl8p.bmp")}
        />
        <Image
          style={styles.imageBack}
          source={require("../assets/imur5q7b.bmp")}
        />
      </Pressable>
    </View>
  );
};


export default Flag;
