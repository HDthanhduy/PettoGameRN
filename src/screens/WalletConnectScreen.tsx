import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
  connectWallet: () => void;
}

const WalletConnectScreen = ({connectWallet}: Props) => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.center]}>
      <TouchableOpacity onPress={connectWallet}>
        <Text>Connect a Wallet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WalletConnectScreen;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
