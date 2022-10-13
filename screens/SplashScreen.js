// import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'
// import medLogo from "../assets/images/medLogo.png"
// import Global from "../assets/styles/Global.js"
// import * as Progress from 'react-native-progress';
// import * as Securestore from "expo-secure-store";
// import { useState } from "react"
// export default function SplashScreen({navigation}) {
//     const [progress, setProgress ] = useState(0)
//     async function getUserData() {
//         let token = await Securestore.getItemAsync("token")
//         setProgress(1)
//         console.log(token)
//         if(!token){
//             navigation.navigate("Start")
//         }
//         if(token){
//             navigation.navigate("Dashboard")
//         }
//     }
//         getUserData()
//     return(
//         <View style={Global.container}>
//             <Image source={medLogo} style={styles.images} />
//             <Progress.Bar progress={0} width={200}  color={"#61CBB4"}/>
//         </View>
//     )
// }
// const { height, width } = Dimensions.get("screen");

// const styles = StyleSheet.create({

//     images: {

//         height: height / 5,
//         width: width /1.2
//     }
// })
