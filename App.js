import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BookingsScreen from './src/screens/BookingsScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';
import LoginScreen from './src/screens/LoginScreen';
import PatientHomeScreen from './src/screens/PatientHome';
import PatientProfileScreen from './src/screens/PatientProfileScreen';
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
    PatientHome: PatientHomeScreen,
    PatientProfile: PatientProfileScreen,
    Practitioners: PractitionersScreen,
    Bookings: BookingsScreen,
    Feedback: FeedbackScreen,
  }),
});

export default createAppContainer(switchNavigator);
