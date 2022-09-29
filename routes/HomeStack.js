//import navigation packages

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

//import screens

import Start from "../screens/Start";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";

//define object with screens

const screens = {

  //start with name of screen js file
   Start: {
    screen: Start,
  },
  Dashboard: {
    screen: Dashboard,
  },
  Login: {
    screen: Login,
  },
 
};
//creating homestack to navigate between screens

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(HomeStack);
