import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestautrantInfoCard = (restaurant = {}) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <View>
      <Card elevation={5} sytle={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[0] }}
        />
        <Title>{name}</Title>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { backgroundColor: "white", padding: 20 },
});
