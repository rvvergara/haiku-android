import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../../../screens/Home';
import {navigationOptions} from '../../navigationHelpers';

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue',
    },
  },
});

export default HomeStack;
