import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('Nitish');

  const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    if (currentPassword && newPassword && newPassword === confirmNewPassword) {
      // Perform password change logic here
      // For instance, you might make an API call to update the password
      // You can add that logic here and handle success/failure accordingly
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
      Alert.alert('Success', 'Password changed successfully!');
    } else {
      Alert.alert('Error', 'Please fill in all fields and ensure the new passwords match.');
    }
  };

  const handleLogout = () => {
    // Navigate to MainScreen
    navigation.navigate('Mainscreen'); // Replace 'MainScreen' with your actual screen name
    // OR show a Toast message
    Alert.alert('Success', 'Logout successful!');
  };

  const selectProfilePic = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'Please grant access to your device gallery.');
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled && result.assets && result.assets.length > 0) {
        const selectedImage = result.assets[0];
        setProfilePic(selectedImage.uri);
      }
    } else {
      Alert.alert('Unsupported Platform', 'Image picker is not supported on the web.');
    }
  };

  return (
    <View style={styles.container}>
      {/* User Profile */}
      <View style={styles.profileSection}>
        {/* Avatar Image */}
        <TouchableOpacity onPress={selectProfilePic}>
          <Image
            source={{ uri: profilePic }}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>User Profile</Text>
        <Text style={styles.userInfo}>Username: {username}</Text>
        {/* ... */}
      </View>

      {/* Change Password Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Change Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Current Password"
          secureTextEntry
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          secureTextEntry
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
        />
        <TouchableOpacity style={styles.option} onPress={handleChangePassword}>
          <Text>Change Password</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    marginBottom: 15,
  },
  option: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    backgroundColor: '#3399FF',
    alignItems: 'center',
    marginTop: 10,
  },
  logoutButton: {
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },

});

export default Settings;
