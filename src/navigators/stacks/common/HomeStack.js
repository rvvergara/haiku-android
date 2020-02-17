import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../../../screens/HomeScreen';
import ProfileScreen from '../../../screens/ProfileScreen';
import BookingSelectionScreen from '../../../screens/BookingSelectionScreen';
import BookingSubmissionScreen from '../../../screens/BookingSubmissionScreen';
import {navigationOptions, defaultNavigationOptions} from '../../navigationHelpers';

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions,
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions,
  },
  BookingSelection: {
    screen: BookingSelectionScreen,
    navigationOptions,
  },
  BookingSubmission: {
    screen: BookingSubmissionScreen,
    navigationOptions,
  },
};

const HomeStack = createStackNavigator(screens, defaultNavigationOptions);

export default HomeStack;
