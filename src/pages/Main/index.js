import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

export default function Main(){
  return (
    <Container >
      <Text>Main Screen</Text>
    </Container>
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
