import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions, defaultNavigationOptions } from '../../navigationHelpers';
import ProfileEditScreen from '../../../screens/ProfileEditScreen';

const screens = {
  ProfileEdit: {
    screen: ProfileEditScreen,
    navigationOptions,
  },
};

const PatientProfileEditStack = createStackNavigator(screens, defaultNavigationOptions);

export default PatientProfileEditStack;
