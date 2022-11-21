//import navigation packages

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

//import screens

import Start from "../screens/Start";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import FinancialLiteracy from "../screens/FinancialLiteracy";
import Mindfullness from "../screens/Mindfullness";
import CreateUser from "../screens/CreateUser";
import SplashScreen from "../screens/SplashScreen";
import Profile from "../screens/Profile";
import ArticlePage from "../screens/ArticlePage";
import CalendarScreen from "../screens/CalendarScreen";
import BottomDrawer from "../components/BottomDrawer";
//define object with screens

const screens = {
  //start with nam
  Start: {
    screen: Start,
  },
  Dashboard: {
    screen: Dashboard,
  },
  Login: {
    screen: Login,
  },
  CalendarScreen: {
    screen: CalendarScreen,
  },
  FinancialLiteracy: {
    screen: FinancialLiteracy,
  },
  Mindfullness: {
    screen: Mindfullness,
  },
  CreateUser: {
    screen: CreateUser,
  },
  Profile: {
    screen: Profile,
  },
  ArticlePage: {
    screen: ArticlePage,
  },
};
//creating homestack to navigate between screens

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    header: (navigation) => <BottomDrawer navigation={navigation} />,
  },
});

export default createAppContainer(HomeStack);
