import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Main Content */}
      {/* ... */}

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navButton}>
          <Icon name="home-outline" size={24} color="orange" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('News')} style={styles.navButton}>
          <Icon name="newspaper-outline" size={24} color="orange" />
          <Text style={styles.navButtonText}>News</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.navButton}>
          <Icon name="list-outline" size={24} color="orange" />
          <Text style={styles.navButtonText}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.navButton}>
          <Icon name="settings-outline" size={24} color="orange" />
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Other styles for your main content container
  },
  navBar: {
    backgroundColor: '#FFFFFF',
    height: 64, // Increase the height for bottom navigation
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 0.5, // Use borderTop for bottom navigation
    borderTopColor: 'orange',
    position: 'absolute', // Position at the bottom
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    flex: 1,
    
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 14,
    color: 'black',
        marginTop: 4, // Adjust text position
  },
});

export default Navbar;



