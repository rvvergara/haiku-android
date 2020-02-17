import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions, defaultNavigationOptions } from '../../navigationHelpers';
import FeedbackScreen from '../../../screens/FeedbackScreen';

const screens = {
  Feedback: {
    screen: FeedbackScreen,
    navigationOptions,
  },
};

const FeedbackStack = createStackNavigator(screens, defaultNavigationOptions);

export default FeedbackStack;
