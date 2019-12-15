import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function Map({ navigation }){

  return(
    <View style={styles.container}>
        <MapView
        style={styles.map}
        region={{
            latitude: -27.210753,
            longitude: -49.644183,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
        }}
        showsUserLocation
        loadingEnabled />
    </View>    
    
  );
} 

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  map:{
      flex: 1
  },
});