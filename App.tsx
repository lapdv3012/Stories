/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/state-management/Store';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/ui/features/home/HomeScreen';
import LoginScreen from './src/ui/features/auth/LoginScreen';
import ProfileScreen from './src/ui/features/profile/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from './src/ui/features/explore/ExploreScreen';
import CartScreen from './src/ui/features/cart/CartScreen';
import OtherScreen from './src/ui/features/other/OtherScreen';
import AccountScreen from './src/ui/features/account/AccountScreen';

const Stack = createNativeStackNavigator()

const Tabs = createBottomTabNavigator()

const mainTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="HomeScreen" component={HomeScreen} />
      <Tabs.Screen name="ExploreScreen" component={ExploreScreen} />
      <Tabs.Screen name="CartScreen" component={CartScreen} />
      <Tabs.Screen name="OtherScreen" component={OtherScreen} />
      <Tabs.Screen name="AccountScreen" component={AccountScreen} />
    </Tabs.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ProfileScreen" options={{ headerShown: false }} component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
