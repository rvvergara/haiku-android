import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import VerifyMessageScreen from './src/screens/VerifyMessageScreen';

const switchNavigator = createSwitchNavigator({
  authFlow: createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen,
    VerifyMessage: VerifyMessageScreen,
  }),
});

export default createAppContainer(switchNavigator);
