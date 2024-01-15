import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Example: using Ionicons

const Categories = () => {
  const navigation = useNavigation();

  const categories = [
    { id: 1, name: 'Entertainment', link: 'Entertainment', icon: 'newspaper-outline', color: '#ff6347' },
    { id: 2, name: 'Technology', link: 'Technology', icon: 'settings-outline', color: '#87ceeb' },
    { id: 3, name: 'Sports', link: 'Sports', icon: 'basketball-outline', color: '#ffa500' },
    { id: 4, name: 'Science', link: 'Science', icon: 'globe-outline', color: '#32cd32' },
    { id: 5, name: 'Health', link: 'Health', icon: 'medkit-outline', color: '#9370db' },
    { id: 6, name: 'Business', link: 'Business', icon: 'business-outline', color: 'blue' },

  ];

  const handleCategoryClick = (categoryLink) => {
    // Navigate to the respective category page
    navigation.navigate(categoryLink);
  };

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[styles.card, { backgroundColor: category.color }]}
          onPress={() => handleCategoryClick(category.link)}
        >
          <Icon name={category.icon} size={40} color="#fff" />
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '45%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent', // to avoid the warning
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Categories;
