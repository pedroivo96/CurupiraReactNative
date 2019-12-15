import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

import logoCurupira from '../assets/icone_curupira.png'

import borboleta from '../assets/borboleta.png';
import iguana from '../assets/iguana.png';
import macaco from '../assets/macaco.png';
import papagaio from '../assets/papagaio.png';
import peixe from '../assets/peixe.png';
import sapo from '../assets/sapo.png';

import colors from '../colors';

export default function Splash({ navigation }){

  const [objectsList, setObjectsList] = useState([
    {icon: borboleta, text: "Invertebrados", isSelected: false, index: 0},
    {icon: iguana,    text: "Répteis",       isSelected: false, index: 1},
    {icon: macaco,    text: "Mamíferos",     isSelected: false, index: 2},
    {icon: papagaio,  text: "Aves",          isSelected: false, index: 3},
    {icon: peixe,     text: "Peixes",        isSelected: false, index: 4},
    {icon: sapo,      text: "Anfíbios",      isSelected: false, index: 5}, 
  ]);
  const denuncia = navigation.getParam('denuncia', null);

  function prosseguirDenuncia(){
    navigation.navigate('Map');
  }

  function onPressedItem(item){
    if(!item.isSelected){
        item.isSelected = true;
    }
    else{
        item.isSelected = false;
    }
            
    objectsList[item.index] = item;
    const copy = Array.from(objectsList)
    setObjectsList(copy);
  }

  return(
    <View style={styles.container}>
        <Text style={styles.text}>{denuncia.atividadesIlicitas}</Text>
        <View style={styles.body}>
            {objectsList.map((item) => {

                if(!item.isSelected){
                    return (
                        <TouchableOpacity 
                        key={item.index} 
                        style={styles.itemContainer}
                        onPress={() => onPressedItem(item)}>

                            <View style={styles.imageContainer}>
                                <Image style={styles.image} 
                                source={item.icon}/>
                            </View>
                            
                            <View style={styles.textContainer}>
                                <Text>{item.text}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }
                else{
                    return (
                        <TouchableOpacity 
                        key={item.index} 
                        style={styles.itemContainerSelected}
                        onPress={() => onPressedItem(item)}>

                            <View style={styles.imageContainer}>
                                <Image style={styles.image} 
                                source={item.icon}/>
                            </View>
                            
                            <View style={styles.textContainer}>
                                <Text>{item.text}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }
            })}
        </View>
        <View style={styles.bottomBar}>
            <TouchableOpacity onPress={() => prosseguirDenuncia()}>
                <Text>Prosseguir</Text>
            </TouchableOpacity>
        </View>
        </View>    
    
  );
} 

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.primaryColor,
  },
  body:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: colors.primaryDarkColor,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  bottomBar:{
      flex: 1,
  },
  itemContainer:{
      flex: 1,
      alignContent: 'center',
      flexDirection: 'row',
      alignSelf: 'stretch',
      marginBottom: 10
  },
  itemContainerSelected:{
    flex: 1,
    alignContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginBottom: 10,
    backgroundColor: colors.primaryDarkColor,
 },
  imageContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
  },
  image:{
    flex:1,
    resizeMode: 'contain'
  }
});