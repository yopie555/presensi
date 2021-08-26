import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/store/index';

import { checkLogin } from './src/actions/authAction';

import SplashScreen from './src/screens/Splash'
import LoginScreen from './src/screens/Login'
import HomepageScreen from './src/screens/Homepage'
import HomepageScreen2 from './src/screens/Homepage2'
import HistoryScreen from './src/screens/History'
import RiwayatScreen from './src/screens/Riwayat'
import PresensiScreen from './src/screens/Presensi'
import PresensiScreen2 from './src/screens/Presensi2'
import ResetScreen from './src/screens/Reset'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomepageScreen2"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Presensi') {
            iconName = 'chart-histogram'
          } else if (route.name === 'History') {
            iconName = 'history'
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#DAC34D',
        inactiveTintColor: '#FFF',
        style: {
          backgroundColor: '#264384',
          borderTopWidth: 1,
          borderColor: 'white',
        },
      }}
    >
      <Tab.Screen name="Presensi" component={HomepageScreen2} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  )
}

const authScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  )
}

const userScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomepageScreen" component={RootHome} />
      <Stack.Screen name="RiwayatScreen" component={RiwayatScreen} />
      <Stack.Screen name="PresensiScreen" component={PresensiScreen} />
      <Stack.Screen name="PresensiScreen2" component={PresensiScreen2} />
      <Stack.Screen name="ResetScreen" component={ResetScreen} />
    </Stack.Navigator>
  )
}
// const App = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator headerMode="none">
//           <Stack.Screen name="SplashScreen" component={SplashScreen} />
//           <Stack.Screen name="LoginScreen" component={LoginScreen} />
//           <Stack.Screen name="HomepageScreen" component={RootHome} />
//           <Stack.Screen name="RiwayatScreen" component={RiwayatScreen} />
//           <Stack.Screen name="PresensiScreen" component={PresensiScreen} />
//           <Stack.Screen name="PresensiScreen2" component={PresensiScreen2} />
//           <Stack.Screen name="ResetScreen" component={ResetScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// };

const App = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {user.auth == "" && (
          <Stack.Screen name="authScreen" component={authScreen} />
        )}
        {user.auth != "" && (
          <Stack.Screen name="userScreen" component={userScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// export default App;
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};