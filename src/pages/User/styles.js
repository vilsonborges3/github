import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  border-bottom-width: 1px;
  padding-bottom: 20px;
  border-color: #DDD;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #DDD;
`;

export const Name = styled.Text`
  font-size: 23px;
  color: #555;
  font-weight: bold;
  margin-top;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 5px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const Starred = styled.View`
  flex-direction: row;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 20px;
  align-items: center;
`;
export const ButtonRep = styled.TouchableOpacity`

`;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
`;
export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;
export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;
