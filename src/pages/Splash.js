import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import logoCurupira from '../assets/icone_curupira.png'

export default function Splash({ navigation }){
  
  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('Menu');
    }, 1500);

  }, []);
  

  return(
    <View style={styles.container}>
      <Image source={logoCurupira} style={styles.image}></Image>
    </View>
  );
} 

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    resizeMode: 'contain',
    width: 400,
    height: 400
  }
});