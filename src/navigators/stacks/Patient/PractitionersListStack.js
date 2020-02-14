import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions } from '../../navigationHelpers';
import PractitionersScreen from '../../../screens/PractitionersScreen';

const screens = {
  Practitioners: {
    screen: PractitionersScreen,
    navigationOptions,
  },
};

const PractitionersListStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue',
    },
  },
});

export default PractitionersListStack;
