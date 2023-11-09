import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import About from '../screens/About';
import Home from '../screens/Home';
import Liste from '../screens/Liste';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        useLegacyImplementation
        initialRouteName='Home'
        backBehavior='initialRoute'
        screenOptions={screenOptions}
        //drawerContentOptions={{ style: { paddingVertical: 50 } }}
        //drawerContent={drawerContent}
    >
      <Drawer.Screen name="Home">
        { navigation => <Home {...navigation} /> }
      </Drawer.Screen>
      <Drawer.Screen name="About">
        { navigation => <About {...navigation} /> }
      </Drawer.Screen>
      <Drawer.Screen name="Liste">
        { navigation => <Liste {...navigation} /> }
      </Drawer.Screen>

    </Drawer.Navigator>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#4488d6',
  },
  itemStyle: { padding: 0 },
  headerTitleAlign: 'center', // fuer Android
  headerTintColor: 'white',
}

export default DrawerNavigator;