import {createStackNavigator} from 'react-navigation-stack';
import ClinicScreen from '../../../screens/ClinicsScreen';
import {navigationOptions, defaultNavigationOptions} from '../../navigationHelpers';

const screens = {
  Clinics: {
    screen: ClinicScreen,
    navigationOptions,
  },
};

const ClinicsStack = createStackNavigator(screens, defaultNavigationOptions);

export default ClinicsStack;
