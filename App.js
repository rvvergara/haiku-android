import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import BookingsScreen from './src/screens/BookingsScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/Home';
import ProfileEditScreen from './src/screens/ProfileEditScreen';
import PractitionersScreen from './src/screens/PractitionersScreen';
import SignupScreen from './src/screens/SignupScreen';
import VerifyMessageScreen from './src/screens/VerifyMessageScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import ClinicsScreen from './src/screens/ClinicsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import BookingSelectionScreen from './src/screens/BookingSelectionScreen';
import BookingSubmissionScreen from './src/screens/BookingSubmissionScreen';

const switchNavigator = createSwitchNavigator(
  {
    authFlow: createStackNavigator({
      Login: LoginScreen,
      Signup: SignupScreen,
      VerifyMessage: VerifyMessageScreen,
    }),
    patientFlow: createDrawerNavigator({
      Home: createStackNavigator({
        Home: HomeScreen,
        PractitionerProfile: ProfileScreen,
        BookingSelection: BookingSelectionScreen,
        BookingSubmission: BookingSubmissionScreen,
      }),
      ProfileEdit: ProfileEditScreen,
      Practitioners: PractitionersScreen,
      Bookings: BookingsScreen,
      Feedback: FeedbackScreen,
    }),
    practitionerFlow: createDrawerNavigator({
      Home: HomeScreen,
      ProfileEdit: ProfileEditScreen,
      Schedule: ScheduleScreen,
      Clinics: ClinicsScreen,
      Feedback: FeedbackScreen,
    }),
  },
  {
    initialRouteName: 'patientFlow',
  },
);

export default createAppContainer(switchNavigator);
