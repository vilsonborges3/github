import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer initialRouteName= 'Main'>
      <Stack.Navigator >
        <Stack.Screen
          name='Main'
          component={Main}
          options={{
            title: 'Usuários',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#7159c1',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#FFF'
          }}
        />
        <Stack.Screen name='User' component={User}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Routes;
