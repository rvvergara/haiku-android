import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BookingsScreen from './src/screens/BookingsScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/ProfileScreen';
import PractitionersScreen from './src/screens/PractitionersScreen';
import SignupScreen from './src/screens/SignupScreen';
import VerifyMessageScreen from './src/screens/VerifyMessageScreen';

const switchNavigator = createSwitchNavigator({
  authFlow: createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen,
    VerifyMessage: VerifyMessageScreen,
  }),
  patientFlow: createStackNavigator({
    PatientHome: HomeScreen,
    PatientProfile: ProfileScreen,
    Practitioners: PractitionersScreen,
    Bookings: BookingsScreen,
    Feedback: FeedbackScreen,
  }),
});

export default createAppContainer(switchNavigator);
