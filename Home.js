import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React, { useState} from 'react';

export default function Home({ route, navigation }) {
    return (
        <ScrollView>
            <Text>Hi</Text>
            <Button title="Go to Exchange Rate" onPress={() => {
            navigation.navigate('ExchangeRates');
          }}/>
        </ScrollView>
    )
}