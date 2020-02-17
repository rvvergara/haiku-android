import {createStackNavigator} from 'react-navigation-stack';
import ProfileEditScreen from '../../../screens/ProfileEditScreen';
import {navigationOptions, defaultNavigationOptions} from '../../navigationHelpers';

const screens = {
  ProfileEdit: {
    screen: ProfileEditScreen,
    navigationOptions,
  },
};

const ProfileEditStack = createStackNavigator(screens, defaultNavigationOptions);

export default ProfileEditStack;
