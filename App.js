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
import ScheduleScreen from './src/screens/ScheduleScreen';
import ClinicsScreen from './src/screens/ClinicsScreen';

const switchNavigator = createSwitchNavigator({
  authFlow: createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen,
    VerifyMessage: VerifyMessageScreen,
  }),
  patientFlow: createStackNavigator({
    Home: HomeScreen,
    Profile: ProfileScreen,
    Practitioners: PractitionersScreen,
    Bookings: BookingsScreen,
    Feedback: FeedbackScreen,
  }),
  practitionerFlow: createStackNavigator({
    Home: HomeScreen,
    Profile: ProfileScreen,
    Schedule: ScheduleScreen,
    Clinics: ClinicsScreen,
    Feedback: FeedbackScreen,
  }),
});

export default createAppContainer(switchNavigator);
