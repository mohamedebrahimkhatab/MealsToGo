import { React, useState } from "react";
import { StatusBar } from "react-native";
import { RestautrantInfoCard } from "../components/restaurant-info-card.component";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SearchBar = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar
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
