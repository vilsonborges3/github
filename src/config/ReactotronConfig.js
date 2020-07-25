import  Reactotron from 'reactotron-react-native';

if(__DEV__){
  const tron = Reactotron.configure({host: '172.28.208.1'})
    .useReactNative()
    .connect();

    console.tron = tron;
    tron.clear();
}
