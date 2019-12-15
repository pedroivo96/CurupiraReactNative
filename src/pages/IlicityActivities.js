import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

import iconCaca from '../assets/caca.png';
import iconCativeiro from '../assets/cativeiro.png';
import iconMausTratos from  '../assets/maustratos.png';

export default function IlicityActivities({ navigation }){

    const [objectsList, setObjectsList] = useState([
        {icon: iconCaca      , text: "Caça"       , isSelected: false, index: 0}, 
        {icon: iconMausTratos, text: "Maus tratos", isSelected: false, index: 1}, 
        {icon: iconCativeiro , text: "Cativeiro"  , isSelected: false, index: 2}
    ]);

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

    function prosseguirDenuncia(){
        var atividadesIlicitas = "";

        objectsList.map(({ icon, text, isSelected }) => {
            if(isSelected === true){
                atividadesIlicitas = atividadesIlicitas.concat(text+",");
            }
        });

        atividadesIlicitas.slice(0, -1);
    }

    return(
        <View style={styles.container}>
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
  },
  body:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
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
    backgroundColor: '#00FF00',
 },
  imageContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  image:{
    flex:1,
    resizeMode: 'contain'
  }
});