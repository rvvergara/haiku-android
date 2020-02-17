import {createStackNavigator} from 'react-navigation-stack';
import ProfileEditScreen from '../../../screens/ProfileEditScreen';
import {navigationOptions} from '../../navigationHelpers';

const screens = {
  ProfileEdit: {
    screen: ProfileEditScreen,
    navigationOptions,
  },
};

const ProfileEditStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue',
    },
  },
});

export default ProfileEditStack;
