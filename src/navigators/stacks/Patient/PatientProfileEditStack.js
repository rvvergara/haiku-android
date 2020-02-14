import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions } from '../../navigationHelpers';
import ProfileEditScreen from '../../../screens/ProfileEditScreen';

const screens = {
  ProfileEdit: {
    screen: ProfileEditScreen,
    navigationOptions,
  },
};

const PatientProfileEditStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue',
    },
  },
});

export default PatientProfileEditStack;
