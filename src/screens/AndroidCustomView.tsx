import React from 'react';
import {requireNativeComponent} from 'react-native';

const RNCSTMCamera = requireNativeComponent('RNCSTMCamera', AndroidCustomView);

class AndroidCustomView extends React.PureComponent {
  render() {
    return <RNCSTMCamera />;
  }
}
export default AndroidCustomView;
