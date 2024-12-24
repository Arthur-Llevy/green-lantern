import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from "./assets/pictures/symbol-on.png";
import symbolOff from "./assets/pictures/symbol-off.png";
import { useState } from 'react';

export default function App() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const changeAtive = (): void => {
    setIsActive(previousValue => !previousValue);
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={changeAtive}>
        <Image source={isActive ? symbolOn : symbolOff} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
