import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Menu({ navigation }){
  
  return(
    <View style={styles.container}>

      <View style={styles.empty1}/>

      <View style={styles.principal}>
        <TouchableOpacity style={styles.menuButton} onPress={() => {navigation.navigate('IlicityActivities')}}>
          <Text style={styles.textMenuButton}>NOVA DENÚNCIA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.textMenuButton}>AJUDA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.textMenuButton}>MINHAS DENUNCIAS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.textMenuButton}>SOBRE</Text>
        </TouchableOpacity>

        <View style={styles.warning}>
          <Text>Caso não consiga realizar sua denúncia, ligue para 0800 61 8080 e realize-a junto ao IBAMA.</Text>
        </View>
      </View>

      <View style={styles.empty1}/>
    </View>
  );
} 

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  empty1:{
    flex: 1,
  },
  principal:{
    flex: 3,
  },
  menuButton:{
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#10645a',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  textMenuButton:{
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  warning:{
    flex: 2,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});