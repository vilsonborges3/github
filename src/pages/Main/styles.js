import styled from 'styled-components/native';

import { RectButton, View, Text, Image } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;

`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-color: #eee;
  border-bottom-width: 1px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999",
})`
  flex: 1;
  height: 40px;
  border-radius: 4px;
  background: #eee;
  padding: 0 15px;
  border: 1px solid #DDD;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

  export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
    border-radius: 12px;
    background: #DDD;
  `;

  export const Avatar = styled.Image`
    margin-top: 4px;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #eee;
  `;

  export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
  `;

  export const Bio = styled.Text.attrs({
    numberOfLines: 2
  })`
    font-size: 13px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
  `;

  export const ProfileButton = styled(RectButton)`
    background: #7159c1;
    margin-top: 10px;
    align-self: stretch;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    height: 36px;
  `;

  export const ProfileButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
    text-transform: uppercase;
  `;

