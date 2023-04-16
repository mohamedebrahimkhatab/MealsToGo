import { React, useState } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import { RestautrantInfo } from "../components/restaurant-info.component";
import { Searchbar } from "react-native-paper";

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={(q) => setSearchQuery(q)}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestautrantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
