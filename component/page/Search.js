// import React, { useState, useRef } from 'react';
// import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const Search = () => {
//   const [searchText, setSearchText] = useState('');
//   const inputRef = useRef(null);

//   const handleSearch = () => {
//     // Implement your search functionality here using 'searchText'
//     console.log('Searching for:', searchText);
//     // You might perform an API call or any other logic with the search text

//     // Clear input field after search
//     setSearchText('');
//     if (inputRef.current) {
//       inputRef.current.clear();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.searchContainer}>
//         <TextInput
//           ref={inputRef}
//           style={styles.input}
//           placeholder="Search news..."
//           value={searchText}
//           onChangeText={(text) => setSearchText(text)}
//           onSubmitEditing={handleSearch}
//         />
//         <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
//           <Ionicons name="search" size={24} color="white" />
//           <Text style={{ color: 'white' }}>Search</Text>
//         </TouchableOpacity>
//       </View>
//       {/* Other components related to displaying news or search results */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     paddingTop: 30,
//     // Other styles for your container
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingBottom: 10,
//     marginBottom: 20,
//     // Other styles for your search container
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     width: 200,
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginRight: 10,
//     // Other styles for your input
//   },
//   searchButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     width: 100,
//     height: 40,
//     borderRadius: 5,
//     backgroundColor: '#007AFF',
//     justifyContent: 'space-around', // Adjust alignment for text and icon
//   },
//   searchButtonText: {
//     color: 'white',
//     // Other styles for your search button text
//   },
// });

// export default Search;






import { useNavigation } from '@react-navigation/native';

import React, { useState, useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Search = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const handleSearch = async () => {
    try {
      const apiKey = '5ddb2c05e471410fb2a3b79ec822dff9'; // Replace with your NewsAPI key
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchText}&apiKey=${apiKey}`
      );
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      if (!data || !data.articles || !Array.isArray(data.articles)) {
        throw new Error('Invalid data structure received');
      }
  
      setSearchResults(data.articles);
  
      // Clear input field after search
      setSearchText('');
      if (inputRef.current) {
        inputRef.current.clear();
      }
  
      // Navigate to SearchResultScreen with searchResults
      navigation.navigate('SearchResult', { searchResults: data.articles });
    } catch (error) {
      console.error('Error searching for news:', error);
      // Handle error cases or display a message to the user
      setSearchResults([]);
    }
  };
  
  
  const renderNewsItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsDescription}>{item.description}</Text>
      {/* Add other news item information to display */}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Search news..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Ionicons name="search" size={24} color="white" />
          <Text style={{ color: 'white' }}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        {searchResults.length > 0 ? (
          <FlatList
            data={searchResults}
            renderItem={renderNewsItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={styles.noResultsText}>No results found</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
    // Other styles for your container
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 20,
    // Other styles for your search container
  },
  input: {
    flex: 1,
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    // Other styles for your input
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    justifyContent: 'space-around', // Adjust alignment for text and icon
  },
  resultContainer: {
    flex: 1,
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
    // Other styles for your news title
  },
  newsDescription: {
    // Styles for description
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    // Other styles for no results text
  },
});

export default Search;








