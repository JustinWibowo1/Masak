import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './StartPage/home';
import login from './StartPage/login';
import NasiGoreng from './StartPage/NasiGoreng'
import SateAyam from './StartPage/SateAyam'
import register from './StartPage/register';
import rendang from './StartPage/rendang'
import LontongOporAyam from './StartPage/LontongOporAyam'
import spaghetti from './StartPage/spaghetti'
import ribeye from './StartPage/ribeye'
import chicken from './StartPage/chicken'
import spicy from './StartPage/spicy'
import pizza from './StartPage/pizza'
import burger from './StartPage/burger'
import kentang from './StartPage/kentang'
import popcorn from './StartPage/popcorn'
import alpukat from './StartPage/alpukat'
import stroberi from './StartPage/stroberi'
import mangga from './StartPage/mangga'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={home} options={{headerShown:false}} />
        <Stack.Screen name="login" component={login} options={{headerShown:false}} />
        <Stack.Screen name="register" component={register} options={{headerShown:false}} />
        <Stack.Screen name="NasiGoreng" component={NasiGoreng} options={{ title: 'Nasi Goreng' }} />
        <Stack.Screen name="SateAyam" component={SateAyam} options={{ title: 'Sate Ayam' }} />
        <Stack.Screen name="rendang" component={rendang} options={{ title: 'rendang' }} />
        <Stack.Screen name="LontongOporAyam" component={LontongOporAyam} options={{ title: 'LontongOporAyam' }} />
        <Stack.Screen name="spaghetti" component={spaghetti} options={{ title: 'Spaghetti' }} />
        <Stack.Screen name="ribeye" component={ribeye} options={{ title: 'Ribeye' }} />
        <Stack.Screen name="chicken" component={chicken} options={{ title: 'Chicken Cordon Blue' }} />
        <Stack.Screen name="spicy" component= {spicy} options={{ title: 'Spicy Tuna Sandwich' }} />
        <Stack.Screen name="pizza" component= {pizza} options={{ title: 'Pizza' }} />
        <Stack.Screen name="burger" component= {burger} options={{ title: 'Burger' }} />
        <Stack.Screen name="kentang" component= {kentang} options={{ title: 'Kentang Goreng' }} />
        <Stack.Screen name="popcorn" component= {popcorn} options={{ title: 'Caramel Popcorn' }} />
        <Stack.Screen name="alpukat" component= {alpukat} options={{ title: 'Jus Alpukat' }} />
        <Stack.Screen name="stroberi" component= {stroberi} options={{ title: 'Jus Strawberry' }} />
        <Stack.Screen name="mangga" component= {mangga} options={{ title: 'Jus Mangga' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;