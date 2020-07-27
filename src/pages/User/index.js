import React, {Component} from 'react';
import { ActivityIndicator } from 'react-native'

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ route }) => ({
    title: route.params.user.name
  });

  state = {
    stars: [],
    loading: false,
  }

  async componentDidMount(){
    const { route } = this.props;

    const { user } = route.params;

    this.setState({  loading: true });

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, loading: false });
  }
  render(){
    const { route } = this.props;
    const { user } = route.params;
    const { stars, loading } = this.state;

    return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar}}/>
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>
      {
        loading ? (
          <ActivityIndicator size={50} color="#7159c1"/>
        ) : (
          <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url}}/>
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>

          )}
        />
        )
      }

    </Container>
    );
  }
}
