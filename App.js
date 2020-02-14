import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import ClinicsScreen from './src/screens/ClinicsScreen';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/LoginScreen';
import ProfileEditScreen from './src/screens/ProfileEditScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import SignupScreen from './src/screens/SignupScreen';
import VerifyMessageScreen from './src/screens/VerifyMessageScreen';
import ScheduleSubmissionScreen from './src/screens/ScheduleSubmissionScreen';
import PatientHomeStack from './src/navigators/stacks/Patient/PatientHomeStack';
import PatientProfileEditStack from './src/navigators/stacks/Patient/PatientProfileEditStack';
import PractitionersListStack from './src/navigators/stacks/Patient/PractitionersListStack';
import BookingsStack from './src/navigators/stacks/common/BookingsStack';
import FeedbackStack from './src/navigators/stacks/common/FeedbackStack';

const switchNavigator = createSwitchNavigator(
  {
    authFlow: createStackNavigator({
      Login: LoginScreen,
      Signup: SignupScreen,
      VerifyMessage: VerifyMessageScreen,
    }),
    patientFlow: createDrawerNavigator({
      Home: PatientHomeStack,
      ProfileEdit: PatientProfileEditStack,
      Practitioners: PractitionersListStack,
      Bookings: BookingsStack,
      Feedback: FeedbackStack,
    }),
    practitionerFlow: createDrawerNavigator({
      Home: HomeScreen,
      ProfileEdit: ProfileEditScreen,
      Schedule: createStackNavigator({
        Schedule: ScheduleScreen,
        ScheduleSubmission: ScheduleSubmissionScreen,
      }),
      Bookings: BookingsStack,
      Clinics: ClinicsScreen,
      Feedback: FeedbackStack,
    }),
  },
  {
    initialRouteName: 'patientFlow',
  },
);

export default createAppContainer(switchNavigator);
