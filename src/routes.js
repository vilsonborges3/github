import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';


const Stack = createStackNavigator();

const Routes = () => {
  options = {
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: '#7159c1',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#FFFFFF'
  }
  return (
    <NavigationContainer initialRouteName= 'Main'>
      <Stack.Navigator screenOptions={options} >
        <Stack.Screen
          name='Main'
          component={Main}
          options={Main.navigationOptions}
        />
        <Stack.Screen
          name='User'
          component={User}
          options={User.navigationOptions}
        />
        <Stack.Screen
          name='Repository'
          component={Repository}
          options={Repository.navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
}


export default Routes;
