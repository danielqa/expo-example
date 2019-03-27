import React from 'react';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { IconButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import Header from '../components/layout/Header';
import Menu from '../components/layout/Menu';
import Home from '../features/home';

const HomeStack = createStackNavigator({
  Home,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerTitle: <Header />,
    headerStyle: {
      backgroundColor: '#fff',
      height: 70,
    },
    headerLeft: (
      <IconButton
        icon={() => <FontAwesome name="bars" color="#333" size={24} />}
        onPress={navigation.toggleDrawer}
      />
    ),
    headerLeftContainerStyle: {
      marginLeft: 5,
      marginTop: 15,
    },
  }),
});

const DrawerNavigator = createDrawerNavigator({
  Main: HomeStack,
}, {
  contentComponent: props => <Menu {...props} />,
});

const AppNavigator = createStackNavigator({
  Main: DrawerNavigator,
}, {
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);
