import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions, defaultNavigationOptions } from '../../navigationHelpers';
import ScheduleScreen from '../../../screens/ScheduleScreen';
import ScheduleSubmissionScreen from '../../../screens/ScheduleSubmissionScreen';

const screens = {
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions,
  },
  ScheduleSubmission: {
    screen: ScheduleSubmissionScreen,
    navigationOptions,
  },
};

const ScheduleStack = createStackNavigator(screens, defaultNavigationOptions);

export default ScheduleStack;
