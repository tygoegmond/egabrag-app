import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import Navigator from './routes/HomeStack';



export default function App() {
  return (
    <Navigator />
  )
}