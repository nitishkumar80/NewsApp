import React from 'react';
import Toast from 'react-native-toast-message';

function ToastContainer() {
  return <Toast ref={(ref) => Toast.setRef(ref)} />;
}

export default ToastContainer;