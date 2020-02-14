import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions } from '../../navigationHelpers';
import BookingsScreen from '../../../screens/BookingsScreen';
import VideoScreen from '../../../screens/VideoScreen';

const screens = {
  Bookings: {
    screen: BookingsScreen,
    navigationOptions,
  },
  Video: {
    screen: VideoScreen,
    navigationOptions,
  },
};

const BookingsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue',
    },
  },
});

export default BookingsStack;
