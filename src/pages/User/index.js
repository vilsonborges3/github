import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {
  static navigationOptions = ({ route }) => ({
    title: route.params.user.name
  });

  state = {
    stars: [],
  }

  async componentDidMount(){
    const { route } = this.props;

    const { user } = route.params;

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data });
  }
  render(){
    return (<View>
      <Text>
        {this.state.stars}
      </Text>
    </View>);
  }
}
