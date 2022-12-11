import { Text, View, StyleSheet, ScrollView, Button, TextInput, Linking } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function ExchangeRates() {

    const [currency, setCurrency] = useState();
    const [amount, setAmount] = useState();
    const [currencyTo, setCurrencyTo] = useState();
    const [rate, setRate] = useState("0");
    const [finalAmount, setFinalAmount] = useState();
    
var myHeaders = new Headers();
myHeaders.append("apikey", "bo27GO2pKVXkBJEsxQc56X3YyvjP41HD");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const getRateFromApi = () => {
  fetch("https://api.apilayer.com/exchangerates_data/convert?to="+currencyTo+"&from="+currency+ "&amount="+amount, requestOptions)
    .then((response) => response.json())
    .then((json) => {         
       console.log(json);
       setFinalAmount(json.result);
    })
    .catch((error) => {
       console.error(error);
    });

  };


return (
  <ScrollView>
  <View style={styles.container}>
      <TextInput 
      style={{height: 40,
            borderColor: 'white',
            borderWidth: 1, color: 'white', height: 50, width: 150, flex: 1, textAlign: 'center',}}
            placeholder="Enter Amount"
            placeholderTextColor={'white'}
            onChangeText={(newText) => {
              setAmount(newText);
              
            }}
      />
      
      <TextInput
            style={{height: 40,
              borderColor: 'white',
              borderWidth: 1, color: 'white', height: 50, width: 200, flex: 1, textAlign: 'center',}}
            placeholder="Enter Starting Currency"
            placeholderTextColor={'white'}
            onChangeText={(newText) => {
              setCurrency(newText);
              
            }}
         
          />
          <TextInput
            style={{height: 40,
              borderColor: 'white',
              borderWidth: 1, color: 'white', height: 50, width: 200, flex: 1, textAlign: 'center',}}
            placeholder="Enter Desired Currency"
            placeholderTextColor={'white'}
            onChangeText={(newText) => {
              setCurrencyTo(newText);
              
            }}
        
          />
          
          <Button title="Get New Amount" onPress={getRateFromApi}/>
          <Text style={styles.items}>Amount in {currencyTo}: {finalAmount}</Text>
          <Text style={{color: 'white', padding: 25, fontWeight: 'bold'}}
          onPress={() => Linking.openURL('https://www.iban.com/currency-codes')}>
            Find your currency code here
          </Text>
         
          
    </View>
    </ScrollView>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
    alignItems: 'center',
    justifyContent: 'top',    
    padding: 25, 
     
  },
  itemName: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemDesc: {
    padding: 10,
    fontSize: 10,
    height: 44,
  },
  border: {
    borderWidth: 4,
    borderColor: "white",
  },
  title: {
      fontSize: 18,
      fontWeight: 'bold',
      alignItems: 'center',
      color: 'white',
    },
    items: {
      fontSize: 18,
      fontWeight: 'bold',
      alignItems: 'center',
      color: 'white',
    },
    
  
});
