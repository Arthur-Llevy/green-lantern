import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from "./assets/pictures/symbol-on.png";
import symbolOff from "./assets/pictures/symbol-off.png";
import { useState } from 'react';
import { styles } from './styles';

export default function App() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const changeAtive = (): void => {
    setIsActive(previousValue => !previousValue);
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <Text style={styles.text}>Clique na imagem abaixo</Text>
      <TouchableOpacity onPress={changeAtive}>
        <Image source={isActive ? symbolOn : symbolOff} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

