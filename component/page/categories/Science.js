import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { NativeBaseProvider, FlatList } from "native-base";
import moment from "moment"; // Import moment library
import { service } from "../../config/cryptoservice";

const Science = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    service("science")
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const openNewsLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity onPress={() => openNewsLink(item.url)}>
      <View style={styles.newsContainer}>
      <Image resizeMode='cover'   style={{ width: 355, height: 200 }} source={{ uri: item.urlToImage }} accessibilityLabel="Alternate Text" />


        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{moment(item.publishedAt).format("LLL")}</Text>
        <Text style={styles.newsDescription}>{item.description}</Text>
       {/* <Text style={styles.newsContent}>{item.content}</Text> */}

      </View>
    </TouchableOpacity>
  );

  return (
    <NativeBaseProvider>
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item, index) => (item.id || index).toString()}
      />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    padding: 10,
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
   newsContent: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20, // Adjust line height as needed
    maxHeight: 100, // Limit the maximum height of the content
    overflow: "hidden",
    // Apply ellipsis for overflow text
    textOverflow: "ellipsis",
  },
});

export default Science;
