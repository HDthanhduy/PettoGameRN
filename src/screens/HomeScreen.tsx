import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MyCustomView from './MyCustomView';
import WalletConnect from '@walletconnect/client';

interface Props {
  connector: WalletConnect;
  killSession: () => void;
}

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length,
  )}`;
};

// const image = {uri: '../../assets/earn.png'};

const HomeScreen = ({connector, killSession}: Props) => {
  return (
    <View style={styles.container}>
      {/* <Text>{shortenAddress(connector.accounts[0])}</Text> */}
      <ImageBackground
        source={require('../../assets/earn.png')}
        resizeMode="cover"
        style={styles.image}>
        {/* <Text>okko</Text> */}
        {Platform.OS === 'ios' ? (
          <MyCustomView style={{width: '100%', height: '40%'}} />
        ) : (
          <Text> Android</Text>
        )}
        <TouchableOpacity onPress={killSession}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
