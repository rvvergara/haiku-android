import React from 'react';
import DrawerTrigger from '../components/Common/DrawerTrigger.js';

export const navigationOptions = {
  headerTitle: () => <DrawerTrigger />,
};

export const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue',
      borderColor: 'red',
      borderWidth: 10,
      height: 100,
    },
  },
};
