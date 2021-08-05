import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SplashScreen from './src/screens/Splash'
import LoginScreen from './src/screens/Login'
import HomepageScreen from './src/screens/Homepage'
import HistoryScreen from './src/screens/History'
import ProfileScreen from './src/screens/Profile'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomepageScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'HomepageScreen') {
            iconName = 'content-copy'
          } else if (route.name === 'HistoryScreen') {
            iconName = 'home'
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#00A5f4',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Beranda" component={HomepageScreen} />
      <Tab.Screen name="Produk" component={HistoryScreen} />
    </Tab.Navigator>
  )
}

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomepageScreen" component={RootHome} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
