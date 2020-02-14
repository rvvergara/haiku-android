import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loading = ({size}) => {
  return (
    <View>
      <ActivityIndicator size={size} />
    </View>
  );
};

const styles = {
  spinnerContainer: {
    flex: -1,
    marginTop: 12,
    marginBottom: 12,
  },
};

export {Loading}