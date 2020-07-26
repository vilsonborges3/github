import React, {Component} from 'react';
import api from '../../services/api';
import { Keyboard } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';


export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  }

  handleAddUser = async () => {
    const { users, newUser } = this.state;

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
    });

    console.log(this.state.users);

    Keyboard.dismiss();
  }
  render() {
    const { users, newUser } = this.state;
    return (
      <Container >
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={25} color="#FFF"/>
          </SubmitButton>
        </Form>
      </Container>
    );
  }
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
