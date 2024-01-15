import React from 'react';
import { StyleSheet, View , Image } from 'react-native';
import Search from './page/Search';
import PopularTag from './page/HomeScreen/PopularTag';
import NewsHeadlines from './page/HomeScreen/NewsHeadlines';
import Navbar from './page/Navbar';
import Banner from './page/HomeScreen/Banner';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search />
      </View>
      <View style={styles.popularTag}>
        <PopularTag />
      </View>
      <View style={styles.newsContainer}>
        <NewsHeadlines />
      </View>

     
      <View style={styles.navbar}>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Other styles for your main container
  },
  searchContainer: {
    // Styles for search container
  },
  popularTag: {
    marginVertical:10,
  },
  date: {
    fontSize: 14,
  },
  newsContainer: {
    flex: 1, // Fill remaining space
    
  },
  navbar: {
    // Styles for the navbar container
  },
});

export default Home;
