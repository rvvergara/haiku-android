import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import BookingsStack from './src/navigators/stacks/common/BookingsStack';
import ClinicsStack from './src/navigators/stacks/common/ClinicsStack';
import FeedbackStack from './src/navigators/stacks/common/FeedbackStack';
import HomeStack from './src/navigators/stacks/common/HomeStack';
import ProfileEditStack from './src/navigators/stacks/common/ProfileEditStack';
import PractitionersListStack from './src/navigators/stacks/Patient/PractitionersListStack';
import ScheduleStack from './src/navigators/stacks/Practitioner/ScheduleStack';
import LoginScreen from './src/screens/LoginScreen';
import NewProfileScreen from './src/screens/NewProfileScreen';
import ResolveAuthScreen from './src/screens/ResolveAuth';
import ResolveProfileScreen from './src/screens/ResolveProfile';
import ResolveRoleScreen from './src/screens/ResolveRole';
import SignupScreen from './src/screens/SignupScreen';
import VerifyMessageScreen from './src/screens/VerifyMessageScreen';
import store from './src/store/store';
import {setNavigator} from './src/utils/navigationRef';
import Home from './src/navigators/drawerItems/Common/Home';
import Profile from './src/navigators/drawerItems/Common/Profile';
import Bookings from './src/navigators/drawerItems/Common/Bookings';
import Clinics from './src/navigators/drawerItems/Common/Clinics';
import Practitioners from './src/navigators/drawerItems/Patient/Practitioners';
import Feedback from './src/navigators/drawerItems/Common/Feedback';
import Schedule from './src/navigators/drawerItems/Practitioner/Schedule';
import { drawerOptions } from './src/navigators/drawerOptions';

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  ResolveProfile: ResolveProfileScreen,
  ResolveRole: ResolveRoleScreen,
  NewProfile: NewProfileScreen,
  authFlow: createStackNavigator(
    {
      Login: LoginScreen,
      Signup: SignupScreen,
      VerifyMessage: VerifyMessageScreen,
    },
    {
      headerMode: null,
    },
  ),
  patientFlow: createDrawerNavigator(
    {
      Home,
      'Edit Profile': Profile,
      Practitioners,
      Bookings,
      Clinics,
      Feedback,
    },
    drawerOptions,
  ),
  practitionerFlow: createDrawerNavigator(
    {
      Home,
      'Edit Profile': Profile,
      Schedule,
      Bookings,
      Clinics,
      Feedback,
    },
    drawerOptions,
  ),
});

const App = createAppContainer(switchNavigator);

export default () => (
  <Provider store={store}>
    <App ref={(navigator) => setNavigator(navigator)} />
  </Provider>
);
