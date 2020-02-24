import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions, defaultNavigationOptions } from '../../navigationHelpers';
import PractitionersScreen from '../../../screens/PractitionersScreen';
import ProfileScreen from '../../../screens/ProfileScreen';
import BookingSelectionScreen from '../../../screens/BookingSelectionScreen';

const screens = {
  Practitioners: {
    screen: PractitionersScreen,
    navigationOptions,
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      ...navigationOptions,
      cardStyle: {
        backgroundColor: '#eff0f2',
      },
    },
  },
  BookingSelection: {
    screen: BookingSelectionScreen,
    navigationOptions,
  },
};

const PractitionersListStack = createStackNavigator(screens, defaultNavigationOptions);

export default PractitionersListStack;
