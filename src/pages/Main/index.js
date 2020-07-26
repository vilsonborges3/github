import React from 'react';

import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default function Main(){
  return (
    <Container >
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />
        <SubmitButton>
          <Icon name="add" size={20} color="#FFF"/>
        </SubmitButton>
      </Form>
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
    headerTintColor: '#FFFFFF'
};
