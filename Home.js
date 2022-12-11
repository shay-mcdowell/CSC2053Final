import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React, { useState} from 'react';

export default function Home({ route, navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.title}>Welcome to our Currency Exchange App!</Text>
            <Text style={styles.items}>Created by Maya McFadden and Shay McDowell</Text>
            </View>
            
            <Button title="Go to Exchange Rate" onPress={() => {
            navigation.navigate('ExchangeRates');
          }}/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'navy',
      alignItems: 'center',
      justifyContent: 'top',    
      padding: 25, 
       
    },
    
    title: {
      fontSize: 17,
      fontWeight: 'bold',
      alignItems: 'center',
      color: 'white',
    },
    items: {
      fontSize: 12,
      fontWeight: 'bold',
      alignItems: 'center',
      color: 'white',
      padding: 10,
    }
  });
  