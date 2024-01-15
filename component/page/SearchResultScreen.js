import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import moment from "moment"; // Import moment library

const SearchResultScreen = ({ route }) => {
  const { searchResults } = route.params;
  const openNewsLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };
  return (
    <ScrollView>
      {searchResults.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => openNewsLink(item.url)}>
          <View style={styles.newsContainer}>
            <Image
              width={355}
              height={200}
              resizeMode={"cover"}
              source={{
                uri: item.urlToImage,
              }}
              alt="Alternate Text"
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{moment(item.publishedAt).format("LLL")}</Text>
            <Text style={styles.newsDescription}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  newsContainer: {
    padding: 10,
    borderBottomWidth: 1, // Add a border or separator between articles
    borderBottomColor: '#ccc', // Color for the border
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "600",
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
  },
});
export default SearchResultScreen;
