import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MyCustomView from './MyCustomView';
import WalletConnect from '@walletconnect/client';
import AndroidCustomView from './AndroidCustomView';

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

const HomeScreen = ({connector, killSession}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{shortenAddress(connector.accounts[0])}</Text>
      <Text>okko</Text>
      {Platform.OS === 'ios' ? (
        <MyCustomView style={{width: '100%', height: '80%'}} />
      ) : (
        <AndroidCustomView/>
      )}
      <TouchableOpacity onPress={killSession}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
