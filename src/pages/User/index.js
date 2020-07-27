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
  ButtonRep,
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
    numPage: 1,
  }

  async componentDidMount(){
    const { route } = this.props;

    const { user } = route.params;

    this.setState({  loading: true, stars: []});

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, loading: false });
  }

  loadMore = async () => {
    console.log('entrou');

    this.setState({  loading: true });

    const { numPage } = this.state;

    let newPage = numPage + 1;

    console.log(newPage);

    const { route } = this.props;

    const { user } = route.params;

    const response = await api
      .get(`/users/${user.login}/starred?page=${String(newPage)}`);

    this.setState({
      numPage: newPage,
      stars: response.data,
      loading: false
    });
  }

  handleNavigate = (repository) => {
    const { navigation } = this.props;

    navigation.navigate('Repository', { repository });
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
          onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
          onEndReached={this.loadMore} // Função que carrega mais itens
          renderItem={({ item }) => (
            <ButtonRep onPress={() => this.handleNavigate(item)}>
              <Starred>
                  <OwnerAvatar source={{ uri: item.owner.avatar_url}}/>
                  <Info>
                    <Title>{item.name}</Title>
                    <Author>{item.owner.login}</Author>
                  </Info>
              </Starred>
            </ButtonRep>

          )}
        />
        )
      }

    </Container>
    );
  }
}
