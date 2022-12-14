//import navigation packages

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

//import screens

import Start from "../screens/Start";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import FinancialLiteracy from "../screens/FinancialLiteracy";
import Mindfulness from "../screens/Mindfulness";
import CreateUser from "../screens/CreateUser";
import Ebooks from "../screens/Ebooks";
import SplashScreen from "../screens/SplashScreen";
import Profile from "../screens/Profile";
import ArticlePage from "../screens/ArticlePage";
import CalendarScreen from "../screens/CalendarScreen";
import BottomDrawer from "../components/BottomDrawer";
import PdfPage from "../screens/PdfPage";
import AllEbooks from "../screens/AllEbooks";
import DetailedEbook from "../screens/DetailedEbook";
import Interests from "../screens/Interests";
import SavingGoals from "../screens/SavingGoals";
import EditGoals from "../screens/EditGoals";
import CreateGoal from "../screens/CreateGoal";
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
  Mindfulness: {
    screen: Mindfulness,
  },
  CreateUser: {
    screen: CreateUser,
  },
  Ebooks: {
    screen: Ebooks,
  },
  Profile: {
    screen: Profile,
  },
  ArticlePage: {
    screen: ArticlePage,
  },
  AllEbooks: {
    screen: AllEbooks,
  },
  PdfPage: {
    screen: PdfPage,
  },
  DetailedEbook: {
    screen: DetailedEbook,
  },
  Interests: {
    screen: Interests,
  },
  SavingGoals: {
    screen: SavingGoals,
  },
  EditGoals: { screen: EditGoals },
  CreateGoal: { screen: CreateGoal },
};
//creating homestack to navigate between screens

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    header: (navigation) => <BottomDrawer navigation={navigation} />,
  },
});

export default createAppContainer(HomeStack);
