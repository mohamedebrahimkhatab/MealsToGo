import { React, useState } from "react";
import { StatusBar } from "react-native";
import { RestautrantInfoCard } from "../components/restaurant-info-card.component";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={(q) => setSearchQuery(q)}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestautrantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
