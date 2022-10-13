//import react / reactnative assets
import { useCallback, useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Dimensions,
  Pressable,
  FlatList,
  Animated,
} from "react-native";
import Swiper from "react-native-swiper";
import { getStatusBarHeight } from "react-native-status-bar-height";
// import expo packages
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as Securestore from "expo-secure-store";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
//import components
import Onboarding from "../components/Onboarding";
import landingpage1 from "../assets/images/landingpage1.png";
import landing3 from "../assets/images/landing3.jpg";
import landing4 from "../assets/images/landing4.jpg";
import landingpage2 from "../assets/images/landingpage2.png";
import Paginator from "../components/Paginator";
import Proceed from "../components/Proceed";

export default function Start({ navigation }) {

  //decalre states
  useEffect(() => {
    Securestore.getItemAsync("token").then((token) => {
      
      getUserData(token);
    });
  }, []);
  const [user, setUser] = useState("");
  const [re, setRe] = useState("");
  const [lightMode, setLightMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [buttonPage, setButtonPage] = useState(1);

  async function getUserData() {
    let token = await Securestore.getItemAsync("token")
    console.log(token)
    if(!token){
      console.log("No token")
    }
    if(token){
      navigation.navigate("Dashboard")
    }
  }

  
 
  // declare refs
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatlistRef = useRef();
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    console.log(viewableItems[0].index, "test");
    setCurrentPage(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  
  // import fonts
  
  const [fontsLoaded] = useFonts({
    "Nabla-Regular": require("../assets/fonts/Nabla-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }
  
  
  if(user.name ){
    navigation.navigate("Dashboard")
  }
  // create presshandlers
  
  // define data for onboarding swipe screens
  const data = [
    {
      title: "Welcome to",
      subtext: "My Education Lifestyle",
      image: landingpage1,
      first: {
        state: true,
      },
    },
    {
      title: "Free e-books",
      subtext: "Find free e-books about financial literacy and mindfulness",
      image: landingpage2,
    },
    {
      title: "Daily mindful quotes",
      image: landing3,
    },
    {
      title: "Track personal goals",
      image: landing4,
    },
  ];
  //make scroll function for proceed button

 const scrollToIndex = (index) => {
    flatlistRef.current.scrollToIndex({ animated: true, index: index });
  };

  const handleNext = (event, index) => {
    console.log(currentPage, "current page");
    setButtonPage(currentPage + 1);
    console.log(buttonPage, "next page");
    if (currentPage + 1 === data.length) {
      navigation.navigate("Login");
    } else {
      scrollToIndex(currentPage + 1);
    }
  };

  //

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={"light-content"}
        showHideTransition={"fade"}
      />
      {/* swipeable onboarding screen */}
        <FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          pagingEnabled={true}
          ref={flatlistRef}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          style={styles.list}
          horizontal={true}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.slide1}>
              {/* singular on boarding screen word gerendered */}
              <Onboarding
                title={item.title}
                subtext={item.subtext}
                image={item.image}
                first={item.first?.state}
                handleNext={handleNext}
              />
            </View>
          )}
        />
      <Paginator data={data} scrollX={scrollX} />
      <Proceed handleNext={handleNext} />
    </View>
  );
}

//style sheet aanmaken
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  slider: {
    width: 40,
    height: 8,
    borderRadius: 10,
    bottom: getStatusBarHeight() + 40,
    alignSelf: "center",
    left: width / 2 - 40,
    position: "absolute",
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "black",
    bottom: getStatusBarHeight() + 40,
    alignSelf: "center",
    right: width / 2 - 20,
    position: "absolute",
  },
  dots2: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "black",
    bottom: getStatusBarHeight() + 40,
    alignSelf: "center",
    right: width / 2 - 40,
    position: "absolute",
  },
  dots1D: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "white",
    bottom: getStatusBarHeight() + 40,
    alignSelf: "center",
    right: width / 2 - 20,
    position: "absolute",
  },
  dots2D: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "white",
    bottom: getStatusBarHeight() + 40,
    alignSelf: "center",
    right: width / 2 - 40,
    position: "absolute",
  },
  nav: {
    position: "absolute",
    bottom: 0,
    width: width,
    zIndex: 100,
  },
  list: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "black",
  },
});
