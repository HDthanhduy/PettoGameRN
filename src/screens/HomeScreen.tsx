import {
  ImageBackground,
  Platform,
  SafeAreaView,
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
    <ImageBackground
      source={require('../../assets/earn.png')}
      resizeMode="cover"
      style={styles.container}>
      <View
        style={{
          backgroundColor: '#376AED',
          padding: 10,
          borderRadius: 5,
          marginTop: 40,
        }}>
        <Text style={{color: '#FFFFFF'}}>
          {shortenAddress(connector.accounts[0])}
        </Text>
      </View>

      {Platform.OS === 'ios' ? (
        <MyCustomView style={{width: '100%', height: '80%'}} />
      ) : (
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text>3d Android</Text>
        </View>
      )}
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 30}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#376AED',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 10,
            paddingHorizontal: 40,
            height: 40,
          }}
          onPress={killSession}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#FFFFFF'}}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
  },
  txt: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
