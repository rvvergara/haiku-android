import React from 'react';
import DrawerTrigger from '../components/Common/DrawerTrigger.js';

export const navigationOptions = {
  headerRight: () => <DrawerTrigger />,
  headerTintColor: 'white',
};

export const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#5073f1',
    },
    title: null,
  },
};
