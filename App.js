import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExchangeRates from './ExchangeRate';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="ExchangeRates" component={ExchangeRates} options={{title: "Exchange Rate"}}/>
          </Stack.Navigator>
          </NavigationContainer>
      );
    }
    
    
    //<ExchangeRates/>
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

    

  

