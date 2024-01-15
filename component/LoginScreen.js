import React, { useState, useRef, useEffect } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Reset form fields and animation when navigating back to login screen
    if (isFocused) {
      setUsername("");
      setPassword("");
      resetAnimation();
    }
  }, [isFocused]);

  const mockDatabaseCheck = { username: "nitish", password: "1234567" };

  const showToastSuccess = (username) => {
    Toast.show({
      type: 'success',
      text1: `Welcome to home , ${username}`,
      visibilityTime: 3000,
      autoHide: true,
    });
  };

  const showToastError = () => {
    Toast.show({
      type: 'error',
      text1: 'Username and password do not match',
      visibilityTime: 3000,
      autoHide: true,
    });
    // Reset form fields on login failure
    setUsername("");
    setPassword("");
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogIn = async () => {
    if (username === mockDatabaseCheck.username && password === mockDatabaseCheck.password) {
      animateSuccess(); // Trigger success animation
      setTimeout(() => {
        showToastSuccess(username);
        navigation.navigate("Home");
      }, 1000); // Adjust this timing based on your animation duration
    } else {
      showToastError();
    }
  };

  const animateSuccess = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const resetAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/login0.png")}
        // style={styles.logo}
        style={{ width: 355, height: 200 }}
        resizeMode='cover'

      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={handleUsernameChange}
        value={username}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handlePasswordChange}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleLogIn} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.animationContainer, animatedStyle]}>
        <Text style={styles.animationText}>Login Successful!</Text>
      </Animated.View>

      <Text style={styles.user}>
        Username: nitish
        <br/>
        <br/>
        Password:1234567
      </Text>

      <Text>
        Enter username or password to login homepage
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  user: {
   marginVertical:80,
   
  },
  animationContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "green",
    padding: 20,
    alignItems: "center",
  },
  animationText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default LoginScreen;
