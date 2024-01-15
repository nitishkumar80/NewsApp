import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList , Image , Linking,   TouchableOpacity } from 'react-native';
import moment from "moment"; // Import moment library

const NewsHeadlines = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreakingNews = async () => {
      try {
        const apiKey = '5ddb2c05e471410fb2a3b79ec822dff9'; // Replace with your NewsAPI key
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (!data || !data.articles || !Array.isArray(data.articles)) {
          throw new Error('Invalid data structure received');
        }

        setBreakingNews(data.articles);
        setError(null); // Resetting error if successful
      } catch (error) {
        console.error('Error fetching breaking news:', error);
        setError('Error fetching breaking news'); // Set error message
        setBreakingNews([]); // Clear breaking news in case of error
      }
    };

    fetchBreakingNews();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const openNewsLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };

  const renderBreakingNewsItem = ({ item }) => (
    <TouchableOpacity onPress={() => openNewsLink(item.url)}>
    <View style={styles.newsItem}>
       <Image
          width={300}
          height={100}
          resizeMode={"cover"}
          source={{
            uri: item.urlToImage,
          }}
          alt="Alternate Text"
        />
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.date}>{moment(item.publishedAt).format("LLL")}</Text>

      <Text style={styles.newsDescription}>{item.description}</Text>

      {/* Add other breaking news item information to display */}
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={breakingNews}
        renderItem={renderBreakingNewsItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.noResultsText}>No breaking news found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    position:"relative",
    top:-20, 
    // Other styles for your container
  },
  newsItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    // Other styles for your news item
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginVertical:2,
    // Other styles for your news title
  },
  date: {
    fontSize: 14,
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    // Other styles for no results text
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'red',
    // Other styles for error text
  },
});

export default NewsHeadlines;
