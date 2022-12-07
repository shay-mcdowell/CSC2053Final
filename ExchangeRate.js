import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function ExchangeRates() {

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("$5");
    
var myHeaders = new Headers();
myHeaders.append("apikey", "bo27GO2pKVXkBJEsxQc56X3YyvjP41HD");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const getRateFromApi = () => {
  fetch("https://api.apilayer.com/exchangerates_data/latest?symbols={}&base=EUR}", requestOptions)
    .then((response) => response.text())
    .then((json) => {         
       console.log(json);
       for (let i=0; i<json.count; i++) {
        console.log(json.results[i].content);
       }
    })
    .catch((error) => {
       console.error(error);
    });

    
  };

// fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=&base={USD}", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

return (
  <View style={styles.container}>
      <Text>
        amount = {currency}
      </Text>
      
      <TextInput
            style={{height: 40,
            borderColor: 'gray',
            borderWidth: 1}}
            placeholder="Enter Starting Currency"
            onChangeText={(newText) => {
              setCurrency(newText);
              
            }}
         
          />
          <TextInput
            style={{height: 40,
            borderColor: 'gray',
            borderWidth: 1}}
            placeholder="Enter Desired Currency"
            onChangeText={(newText) => {
              setAmount(newText);
              
            }}
        
          />
          <Button title="Get Your Rate" onPress={() => {
            
          }}/>
    </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});