//import navigation packages

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

//import screens

import Start from "../screens/Start";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import FinancialLiteracy from "../screens/FinancialLiteracy";
import CreateUser from "../screens/CreateUser";
import SplashScreen from "../screens/SplashScreen";
import Profile from "../screens/Profile";
//define object with screens

const screens = {
  //start with name of screen js file
  SplashScreen: {
    screen: SplashScreen,
  },
  Start: {
    screen: Start,
  },
  Dashboard: {
    screen: Dashboard,
  },
  Login: {
    screen: Login,
  },
  FinancialLiteracy: {
    screen: FinancialLiteracy,
  },
  CreateUser: {
    screen: CreateUser,
  },
  Profile: {
    screen: Profile,
  },
};
//creating homestack to navigate between screens

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(HomeStack);
