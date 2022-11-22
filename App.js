import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import Navigator from "./routes/HomeStack";
import BottomDrawer from "./components/BottomDrawer";
import "intl";
import "intl/locale-data/jsonp/en";

export default function App({ navigation }) {
  return (
    <>
      <Navigator />
    </>
  );
}
