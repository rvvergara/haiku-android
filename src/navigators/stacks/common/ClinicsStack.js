import {createStackNavigator} from 'react-navigation-stack';
import ClinicScreen from '../../../screens/ClinicsScreen';
import {navigationOptions} from '../../navigationHelpers';

const screens = {
  Clinics: {
    screen: ClinicScreen,
    navigationOptions,
  },
};

const ClinicsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue',
    },
  },
});

export default ClinicsStack;
