import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions, defaultNavigationOptions } from '../../navigationHelpers';
import PractitionersScreen from '../../../screens/PractitionersScreen';

const screens = {
  Practitioners: {
    screen: PractitionersScreen,
    navigationOptions,
  },
};

const PractitionersListStack = createStackNavigator(screens, defaultNavigationOptions);

export default PractitionersListStack;
