import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
// import { Container } from './styles';

export default class User extends Component {
  static navigationOptions = () => ({

  });


  async componentDidMount(){

  }
  render(){
    return (<View>
      <Text>
        {
          JSON.stringify(this.props.route)
        }
      </Text>
    </View>);
  }
}
