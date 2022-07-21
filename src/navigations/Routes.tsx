import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Platform} from 'react-native';

import {
  useWalletConnect,
  withWalletConnect,
} from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {scheme} from '../../app.json';
import {NavigationContainer} from '@react-navigation/native';
import WalletConnectScreen from '../screens/WalletConnectScreen';
import HomeScreen from '../screens/HomeScreen';
import AndroidCustomView from '../screens/AndroidCustomView';

const Routes = () => {
  const connector = useWalletConnect();

  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);

  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);

  return (
    <NavigationContainer>
      {connector.connected ? (
        <HomeScreen connector={connector} killSession={killSession} />
      ) : (
        <WalletConnectScreen connectWallet={connectWallet} />
      )}
    </NavigationContainer>
    
    // <View style={[StyleSheet.absoluteFill, styles.center]}>
    //   {!connector.connected && (
    //     <TouchableOpacity onPress={connectWallet}>
    //       <Text>Connect a Wallet</Text>
    //     </TouchableOpacity>
    //   )}
    //   {!!connector.connected && (
    //     <View style={styles.center}>
    //       <Text>{shortenAddress(connector.accounts[0])}</Text>
    //       <TouchableOpacity style={styles.paddingTop} onPress={killSession}>
    //         <Text>Log out</Text>
    //       </TouchableOpacity>
    //     </View>
    //   )}
    // </View>
  );
};

export default withWalletConnect(Routes, {
  redirectUrl: Platform.OS === 'web' ? window.location.origin : `${scheme}://`,
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
});
