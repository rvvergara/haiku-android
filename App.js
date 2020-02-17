import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import BookingsStack from './src/navigators/stacks/common/BookingsStack';
import ClinicsStack from './src/navigators/stacks/common/ClinicsStack';
import FeedbackStack from './src/navigators/stacks/common/FeedbackStack';
import HomeStack from './src/navigators/stacks/common/HomeStack';
import ProfileEditStack from './src/navigators/stacks/common/ProfileEditStack';
import PractitionersListStack from './src/navigators/stacks/Patient/PractitionersListStack';
import LoginScreen from './src/screens/LoginScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import ScheduleSubmissionScreen from './src/screens/ScheduleSubmissionScreen';
import SignupScreen from './src/screens/SignupScreen';
import VerifyMessageScreen from './src/screens/VerifyMessageScreen';

const switchNavigator = createSwitchNavigator(
  {
    authFlow: createStackNavigator({
      Login: LoginScreen,
      Signup: SignupScreen,
      VerifyMessage: VerifyMessageScreen,
    }),
    patientFlow: createDrawerNavigator(
      {
        Home: HomeStack,
        ProfileEdit: ProfileEditStack,
        Practitioners: PractitionersListStack,
        Bookings: BookingsStack,
        Feedback: FeedbackStack,
        Clinics: ClinicsStack,
      },
      {
        drawerPosition: 'right',
      },
    ),
    practitionerFlow: createDrawerNavigator(
      {
        Home: HomeStack,
        ProfileEdit: ProfileEditStack,
        Schedule: createStackNavigator({
          Schedule: ScheduleScreen,
          ScheduleSubmission: ScheduleSubmissionScreen,
        }),
        Bookings: BookingsStack,
        Clinics: ClinicsStack,
        Feedback: FeedbackStack,
      },
      {
        drawerPosition: 'right',
      },
    ),
  },
  {
    initialRouteName: 'practitionerFlow',
  },
);

export default createAppContainer(switchNavigator);
