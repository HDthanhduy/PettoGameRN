import React from 'react';
import {requireNativeComponent} from 'react-native';

const RCTCustomView = requireNativeComponent('LoadModel', MyCustomView);

class MyCustomView extends React.PureComponent {
  render() {
    return <RCTCustomView {...this.props} />;
  }
}
export default MyCustomView;
