import CustomDrawer from '../components/Common/CustomDrawer';

export const drawerOptions = {
  drawerPosition: 'right',
  unmountInactiveRoutes: true,
  contentComponent: CustomDrawer,
  contentOptions: {
    labelStyle: {
      fontSize: 20,
      fontWeight: 'normal',
      color: 'white',
    },
    itemStyle: {
      height: 50,
    },
    activeLabelStyle: {
      fontWeight: 'bold',
    },
  },
};
