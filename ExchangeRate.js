import { Text } from 'react-native';
import { useState } from 'react';
export default function ExchangeRates() {

    const [currency, setCurrency] = useState();
    const [amount, setAmount] = useState();
    
var myHeaders = new Headers();
myHeaders.append("apikey", "bo27GO2pKVXkBJEsxQc56X3YyvjP41HD");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=&base={base}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

return (
    <Text>hello</Text>
);
}