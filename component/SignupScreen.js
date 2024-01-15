// import React, { useState } from "react";
// import { View, TouchableOpacity, TextInput, Text, StyleSheet } from "react-native";
// import Toast from 'react-native-toast-message';
// import { useNavigation } from "@react-navigation/native";

// const SignupScreen = () => {
//   const navigation = useNavigation();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [repassword, setRepassword] = useState("");

//   const handleSignup = () => {
//     if (!name || !email || !phone || !password || !repassword) {
//       showToastError("Please fill in all fields");
//       return;
//     }

//     if (password !== repassword) {
//       showToastError("Passwords do not match");
//       return;
//     }

//     if (!validateEmail(email)) {
//       showToastError("Invalid email format");
//       return;
//     }

//     simulateSignup();
//   };

//   const simulateSignup = () => {
//     showToastSuccess();
//   };

//   const showToastSuccess = () => {
//     Toast.show({
//       type: 'success',
//       text1: 'Signup Successful!',
//       text2: `Welcome, ${name}!`,
//       visibilityTime: 3000,
//       autoHide: true,
//       onHide: () => {
//         resetForm();
//         navigation.navigate("Login");
//       },
//     });
//   };

//   const showToastError = (message) => {
//     Toast.show({
//       type: 'error',
//       text1: 'Error',
//       text2: message,
//       visibilityTime: 2000,
//       autoHide: true,
//     });
//   };

//   const resetForm = () => {
//     setName("");
//     setEmail("");
//     setPhone("");
//     setPassword("");
//     setRepassword("");
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Create Account ...</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         keyboardType="email-address"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone Number"
//         keyboardType="phone-pad"
//         value={phone}
//         onChangeText={(text) => setPhone(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry={true}
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Re-enter Password"
//         secureTextEntry={true}
//         value={repassword}
//         onChangeText={(text) => setRepassword(text)}
//       />
//       <TouchableOpacity style={styles.buttonContainer} onPress={handleSignup}>
//         <Text style={styles.btnText}>Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   heading: {
//     fontSize: 24,
//     color: "orange",
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     marginBottom: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     backgroundColor: "#f9f9f9",
//   },
//   buttonContainer: {
//     width: "100%",
//     marginTop: 10,
//     borderRadius: 8,
//     overflow: "hidden",
//     backgroundColor: "orange",
//     alignItems: "center",
//     padding: 15,
//   },
//   btnText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default SignupScreen;




import axios from 'axios';

import React, { useState, useRef, useEffect , form } from "react";
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Animated } from "react-native";
import Toast from 'react-native-toast-message';
import { useNavigation, useIsFocused } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isFocused) {
      resetAnimation();
    }
  }, [isFocused]);

  const handleSignup = () => {
    if (!name || !email || !phone || !password || !repassword) {
      showToastError("Please fill in all fields");
      return;
    }

    if (password !== repassword) {
      showToastError("Passwords do not match");
      return;
    }

    if (!validateEmail(email)) {
      showToastError("Invalid email format");
      return;
    }

    simulateSignup();
  };
  // const handleSignup = async () => {
  //   // Existing form validation logic...
  
  //   try {
  //     const response = await axios.post('http://localhost:3000/signup', {
  //       name,
  //       email,
  //       phone,
  //       password,
  //     });
  
  //     if (response.status === 200) {
  //       // Successful response handling (e.g., show success message)
  //       showToastSuccess();
  //       animateSuccess();
  //     }
  //   } catch (error) {
  //     // Error handling (e.g., show error message)
  //     showToastError("Failed to signup. Please try again.");
  //     console.error('Signup Error:', error);
  //   }
  // };
  const simulateSignup = () => {
    showToastSuccess();
    animateSuccess(); // Trigger success animation
  };

  const showToastSuccess = () => {
    Toast.show({
      type: 'success',
      text1: 'Signup Successful!',
      text2: `Welcome, ${name}!`,
      visibilityTime: 3000,
      autoHide: true,
      onHide: () => {
        resetForm();
        navigation.navigate("LoginScreen");
      },
    });
  };

  const showToastError = (message) => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
      visibilityTime: 2000,
      autoHide: true,
    });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setRepassword("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
   
      <Text style={styles.heading}>Create Account ...</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Re-enter Password"
        secureTextEntry={true}
        value={repassword}
        onChangeText={(text) => setRepassword(text)}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSignup}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.animationContainer, animatedStyle]}>
        <Text style={styles.animationText}>Signup Successful!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    color: "orange",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 10,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "orange",
    alignItems: "center",
    padding: 15,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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

export default SignupScreen;
