import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

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
});

const Flag = () => {
  return (
    <View>
    <Text style={styles.title}>
      The title and onPress handler are required. It is recommended to set
      accessibilityLabel to help make your app usable by everyone.
    </Text>
    <Button
      title="Press me"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
  </View>
  );
};

export default Flag;