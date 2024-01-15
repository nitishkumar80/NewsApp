import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export const PopularTag = () => {
  const navigation = useNavigation();

  const handleTagPress = (tag) => {
    switch (tag) {
      case '#technology':
        navigation.navigate('Technology');
        break;
      case '#sports':
        navigation.navigate('Sports');
        break;
      case '#science':
        navigation.navigate('Science');
        break;
      case '#entertainment':
        navigation.navigate('Entertainment');
        break;
      case '#business':
        navigation.navigate('Business');
        break;
      case '#health':
        navigation.navigate('Health');
        break;
      default:
        // Handle default case if needed
        break;
    }
  };

  const tags = ['#health', '#sports', '#science', '#entertainment', '#technology', '#business',  '#entertainment']; // Example tags

  // Define an array of background colors
  const tagColors = ['green', 'blue', 'blue', 'blue', 'green', 'blue']; // Example colors for each tag

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Popular Tags</Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <TouchableOpacity key={index} onPress={() => handleTagPress(tag)}>
            <Text style={[styles.tag, { backgroundColor: tagColors[index % tagColors.length] }]}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.text}>Breaking News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginVertical: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
    color: 'white',
    marginBottom: 10,
  },
  viewAll: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default PopularTag;
