import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import medLogo from "../assets/images/medLogo.png"
import Global from "../assets/styles/Global.js"
import * as Progress from 'react-native-progress';
import * as Securestore from "expo-secure-store";
import { useState } from "react"
import BottomDrawer from "../components/BottomDrawer";
export default function Profile({navigation}) {
    const signOut = () => {
        Securestore.deleteItemAsync("token").then(navigation.navigate("Start"));
      };
    return(
        <View style={Global.container}>
          <Text>Profile</Text>
            <TouchableOpacity style={[Global.button, {top: 500}]}onPress={signOut}>
                <Text style={Global.buttonText}>Sign out</Text>
            </TouchableOpacity>
            <BottomDrawer navigation={navigation} />
        </View>
    )
}
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({

    images: {
        
        height: height / 5,
        width: width /1.2
    }       
})