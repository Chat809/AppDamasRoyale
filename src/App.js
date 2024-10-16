import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import PlayerProfile from './screens/PlayerProfile';
import Tournaments from './screens/Tournaments';
import SubscriptionPlans from './screens/SubscriptionPlans';

const Stack = createStackNavigator();

const theme = extendTheme({
  colors: {
    primary: {
      500: '#3182CE',
    },
  },
});

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="PlayerProfile" component={PlayerProfile} />
          <Stack.Screen name="Tournaments" component={Tournaments} />
          <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlans} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;