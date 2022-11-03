import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";
import { CounterProvider } from "./context/CounterContext";

const App = () => {
  return (
    <CounterProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </CounterProvider>
  );
};

export default App;
