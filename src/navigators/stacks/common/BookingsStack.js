import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions, defaultNavigationOptions } from '../../navigationHelpers';
import BookingsScreen from '../../../screens/BookingsScreen';
import BookingActionsScreen from '../../../screens/BookingActionsScreen';
import VideoScreen from '../../../screens/VideoScreen';

const screens = {
  Bookings: {
    screen: BookingsScreen,
    navigationOptions,
  },
  BookingActions: {
    screen: BookingActionsScreen,
    navigationOptions,
  },
  Video: {
    screen: VideoScreen,
    navigationOptions,
  },
};

const BookingsStack = createStackNavigator(screens, defaultNavigationOptions);

export default BookingsStack;
