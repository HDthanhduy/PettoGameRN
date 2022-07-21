import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

interface Props {
  connectWallet: () => void;
}

const WalletConnectScreen = ({connectWallet}: Props) => {
  return (
    <ImageBackground
      source={require('../../assets/bg-gameplay-mobile.png')}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>PETTO</Text>
      </View>
      <View style={styles.wlcContainer}>
        <View
          style={{
            backgroundColor: '#EDF5',
            width: '80%',
            height: '50%',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text style={styles.txtWalletConnect}>Welcome to Pettoverse</Text>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={connectWallet}
              style={{
                height: 40,
                backgroundColor: '#376AED',
                justifyContent: 'center',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{fontSize: 15, fontWeight: 'bold', color: '#FFFFFF'}}>
                Connect a Wallet
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WalletConnectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  wlcContainer: {
    flex: 1,
    alignItems: 'center',
  },
  txt: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  txtWalletConnect: {
    paddingTop: 20,
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
