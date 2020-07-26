import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Main(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main Screen</Text>
    </View>
  );
}

Main.navigationOptions = {
    title: 'Usuários',
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: '#7159c1',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#FFF'
};
