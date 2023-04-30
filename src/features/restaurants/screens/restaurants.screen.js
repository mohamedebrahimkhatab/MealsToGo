import styled from "styled-components";
import { React, useState } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestautrantInfoCard } from "../components/restaurant-info-card.component";

const SearchBar = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

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
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
          { name: 15 },
          { name: 16 },
          { name: 17 },
        ]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestautrantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
