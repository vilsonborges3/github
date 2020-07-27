import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

// import { Container } from './styles';

export default class Repository extends Component {
  static navigationOptions = ({ route }) => ({
    title: route.params.repository.name,
  });

  state = {
    loading: true,
  }

  render(){
    const { route } = this.props;

    const { loading } = this.state;

    return (
      <WebView
        source={{ uri: route.params.repository.html_url}}
        style={{  flex: 1 }}
      />
    );
  }
}


