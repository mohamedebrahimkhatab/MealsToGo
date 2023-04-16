import React from "react";
import { StatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <StatusBar style="auto" />
    </>
  );
}
