import React from "react";
import { StyleSheet, StatusBar, View, FlatList } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import { useQuery } from "@tanstack/react-query";

async function fetchStarshipsData() {
  try {
    const response = await fetch(`https://swapi.py4e.com/api/starships/`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Something bad happened with the api…");
  }
}

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  hyperdrive_rating: string;
  cost_in_credits: string;
}

export const StarshipFeedScreen = () => {
  const renderItem = ({ item }: { item: Starship }) => (
    <Card style={styles.containerCard}>
      <Card.Title title={item.name} subtitle={item.model} />
      <Card.Content>
        <Text variant="labelMedium">{item.manufacturer}</Text>
        <Text variant="titleLarge">{item.cost_in_credits} credits</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="text">Buy this spaceship</Button>
      </Card.Actions>
    </Card>
  );

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["results"],
    queryFn: fetchStarshipsData,
  });

  if (isPending) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FlatList
          data={data.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  containerCard: {
    marginHorizontal: 24,
    marginBottom: 32,
  },
});
