import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../../../screens/Home';
import ProfileScreen from '../../../screens/ProfileScreen';
import BookingSelectionScreen from '../../../screens/BookingSelectionScreen';
import BookingSubmissionScreen from '../../../screens/BookingSubmissionScreen';
import { navigationOptions } from '../../navigationHelpers';

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions,
  },
  PractitionerProfile: {
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

const PatientHomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue',
    },
  },
});

export default PatientHomeStack;
