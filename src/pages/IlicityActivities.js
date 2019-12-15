import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import iconCaca from '../assets/caca.png';
import iconCativeiro from '../assets/cativeiro.png';
import iconMausTratos from  '../assets/maustratos.png';

import colors from '../colors';
import fontSizes from '../fontSizes';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function IlicityActivities({ navigation }){

    const [objectsList, setObjectsList] = useState([
        {icon: iconCaca      , text: "Caça"       , isSelected: false, index: 0}, 
        {icon: iconMausTratos, text: "Maus tratos", isSelected: false, index: 1}, 
        {icon: iconCativeiro , text: "Cativeiro"  , isSelected: false, index: 2}
    ]);

    const denuncia = {atividadesIlicitas:"", animais: ""};

    function checkSelected(){

        isSelected = false;

        objectsList.map((item) => {
            if(item.isSelected){
                isSelected = true;
            }
        });

        return isSelected;
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

    function prosseguirDenuncia(){

        if(checkSelected()){
            var atividadesIlicitas = "";

            objectsList.map(({ icon, text, isSelected }) => {
                if(isSelected === true){
                    atividadesIlicitas = atividadesIlicitas.concat(text+",");
                }
            });

            atividadesIlicitas = atividadesIlicitas.slice(0, -1);

            denuncia.atividadesIlicitas = atividadesIlicitas;
            navigation.navigate('Animais', { denuncia: denuncia });

        }
        else{
            alert("Você deve selecionar ao menos uma opção");
        }
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
                                    <Text style={styles.text}>{item.text}</Text>
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
                                    <Text style={styles.text}>{item.text}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }
                })}
            </View>
            <View style={styles.bottomBar}>
                <View style={{flex: 2}}/>
                <View style={{flex: 1}}>
                    <TouchableOpacity style={styles.button} onPress={() => prosseguirDenuncia()}>
                        <Icon
                            name="chevron-right"
                            color="#FFFFFF"/>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 2}}/>
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
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
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
  },
  button:{
      borderWidth: 0,
      borderRadius: 500,
      backgroundColor: colors.secondaryColor,
      alignItems: 'center',
      justifyContent: 'center',
      aspectRatio: 1,
      height: "70%"
  },
  text:{
      fontSize: fontSizes.h6
  }
});