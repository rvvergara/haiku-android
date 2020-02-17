import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import CustomDrawer from './src/components/Common/CustomDrawer';
import BookingsStack from './src/navigators/stacks/common/BookingsStack';
import ClinicsStack from './src/navigators/stacks/common/ClinicsStack';
import FeedbackStack from './src/navigators/stacks/common/FeedbackStack';
import HomeStack from './src/navigators/stacks/common/HomeStack';
import ProfileEditStack from './src/navigators/stacks/common/ProfileEditStack';
import PractitionersListStack from './src/navigators/stacks/Patient/PractitionersListStack';
import ScheduleStack from './src/navigators/stacks/Practitioner/ScheduleStack';
import LoginScreen from './src/screens/LoginScreen';
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
        unmountInactiveRoutes: true,
        contentComponent: CustomDrawer,
        contentOptions: {
          labelStyle: {
            fontSize: 20,
            fontWeight: 'normal',
          },
          itemStyle: {
            height: 50,
          },
          activeLabelStyle: {
            fontWeight: 'bold',
            color: 'black',
          },
        },
      },
    ),
    practitionerFlow: createDrawerNavigator(
      {
        Home: HomeStack,
        ProfileEdit: ProfileEditStack,
        Schedule: ScheduleStack,
        Bookings: BookingsStack,
        Clinics: ClinicsStack,
        Feedback: FeedbackStack,
      },
      {
        drawerPosition: 'right',
        unmountInactiveRoutes: true,
        contentComponent: CustomDrawer,
        contentOptions: {
          labelStyle: {
            fontSize: 20,
          },
        },
      },
    ),
  },
  {
    initialRouteName: 'patientFlow',
  },
);

export default createAppContainer(switchNavigator);
