import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import BookingSelectionScreen from './src/screens/BookingSelectionScreen';
import BookingsScreen from './src/screens/BookingsScreen';
import BookingSubmissionScreen from './src/screens/BookingSubmissionScreen';
import ClinicsScreen from './src/screens/ClinicsScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/LoginScreen';
import PractitionersScreen from './src/screens/PractitionersScreen';
import ProfileEditScreen from './src/screens/ProfileEditScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import SignupScreen from './src/screens/SignupScreen';
import VerifyMessageScreen from './src/screens/VerifyMessageScreen';
import VideoScreen from './src/screens/VideoScreen';
import ScheduleSubmissionScreen from './src/screens/ScheduleSubmissionScreen';
import Header from './src/components/Common/Header';

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
      },
      {
        navigationOptions: {
          headerTitle: () => <Header />,
        },
      }),
      ProfileEdit: ProfileEditScreen,
      Practitioners: PractitionersScreen,
      Bookings: createStackNavigator({
        Bookings: BookingsScreen,
        Video: VideoScreen,
      }),
      Feedback: FeedbackScreen,
    }),
    practitionerFlow: createDrawerNavigator({
      Home: HomeScreen,
      ProfileEdit: ProfileEditScreen,
      Schedule: createStackNavigator({
        Schedule: ScheduleScreen,
        ScheduleSubmission: ScheduleSubmissionScreen,
      }),
      Bookings: createStackNavigator({
        Bookings: BookingsScreen,
        Video: VideoScreen,
      }),
      Clinics: ClinicsScreen,
      Feedback: FeedbackScreen,
    }),
  },
  {
    initialRouteName: 'practitionerFlow',
  },
);

export default createAppContainer(switchNavigator);
