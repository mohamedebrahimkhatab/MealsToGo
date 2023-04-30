import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";

import { Text } from "react-native-paper";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Mapp = () => (
  <SafeArea>
    <Text>map</Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text>settings</Text>
  </SafeArea>
);

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    return <Ionicons name={TAB_ICON[route.name]} size={size} color={color} />;
  },
  tabBarActiveTintColor: "#72a8ff",
  tabBarInactiveTintColor: "gray",
});

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={Mapp} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
