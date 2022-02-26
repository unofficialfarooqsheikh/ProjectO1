// In App.js in a new project

import React,{useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Search from '../Screens/Search';
import IdCard from '../Screens/IdCard';
import { AppContext } from '../Globals/store';

const Stack = createNativeStackNavigator();

function Navigator() {
  const [storeState, dispatch] = useContext(AppContext);
  console.log("storeState",storeState)
  return (
    <NavigationContainer>
      {storeState.isLoggedIn ? (
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ title: "Welcome to the portal" }}
          />
          <Stack.Screen
            name="IdCard"
            component={IdCard}
            options={{ title: "My home" }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Welcome" }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Navigator;