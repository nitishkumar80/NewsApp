import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Mainscreen = () => {
  const navigation = useNavigation();

  const handleSignupPress = () => {
    navigation.navigate('SignupScreen');
  };

  const handleLoginPress = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/mainScreen.png')}
        style={styles.image}
        resizeMode="contain"
      />


<TouchableOpacity style={styles.button} onPress={handleSignupPress}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
<View style={styles.name}>
  <Text>Designed by Nitish Mehta</Text>
</View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  image: {
    width: 500, // Adjust the width and height as needed
    height: 300,
    marginBottom: 10, // Add margin to create space between image and buttons
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width:80,
    alignItems:'center',

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    alignItems:'center',

  },
  name:{
marginVertical:60,
position:'relative',
fontFamily:'Raleway-Black',
top:80,
  },
});

export default Mainscreen;
