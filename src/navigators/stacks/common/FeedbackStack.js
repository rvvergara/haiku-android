import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions } from '../../navigationHelpers';
import FeedbackScreen from '../../../screens/FeedbackScreen';

const screens = {
  Feedback: {
    screen: FeedbackScreen,
    navigationOptions,
  },
};

const FeedbackStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue',
    },
  },
});

export default FeedbackStack;
