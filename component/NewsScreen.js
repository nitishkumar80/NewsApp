import React from 'react'
import  { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
export const NewsScreen = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
      // Replace 'YOUR_API_KEY' with your actual API key
      const apiKey = '81a0b7c9b25c4b86bdb91fc673f7c30e';
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // 'data' contains the fetched news articles
          setArticles(data.articles);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  


  return (
    <View>
    <Text>Top Headlines</Text>
    <FlatList
      data={articles}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
          <Image resizeMode='cover'   style={{ width: 355, height: 200 }} source={{ uri: item.urlToImage }} accessibilityLabel="Alternate Text" />

          <Text>{item.title}</Text>
        <Text>{item.desc}</Text>
        </View>
      )}
    />
  </View>
);
};