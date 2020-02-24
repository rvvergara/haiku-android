import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions, defaultNavigationOptions } from '../../navigationHelpers';
import PractitionersScreen from '../../../screens/PractitionersScreen';
import ProfileScreen from '../../../screens/ProfileScreen';

const screens = {
  Practitioners: {
    screen: PractitionersScreen,
    navigationOptions,
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions,
  },
};

const PractitionersListStack = createStackNavigator(screens, defaultNavigationOptions);

export default PractitionersListStack;
