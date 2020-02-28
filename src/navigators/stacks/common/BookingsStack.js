import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions, defaultNavigationOptions, deepNavigationOptions } from '../../navigationHelpers';
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
    navigationOptions: deepNavigationOptions('Booking Actions'),
  },
  Video: {
    screen: VideoScreen,
    navigationOptions: deepNavigationOptions('Active Call'),
  },
};

const BookingsStack = createStackNavigator(screens, defaultNavigationOptions);

export default BookingsStack;
