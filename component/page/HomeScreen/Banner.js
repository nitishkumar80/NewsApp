import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

// Array of news images (replace these with your actual image URLs)
const newsImages = [
    'https://resize.indiatvnews.com/en/resize/newbucket/400_-/2020/02/breaking-news-1581209106.jpg',
  'https://contentstatic.techgig.com/photo/87503372/techgig-daily-tech-news-digest-03-november.jpg?1189006',
  'https://contentstatic.techgig.com/thumb/msid-87272397,width-800,resizemode-4/TechGig-daily-tech-news-digest-26-October.jpg?1268397',
  'https://contentstatic.techgig.com/thumb/msid-87251205,width-800,resizemode-4/TechGig-daily-tech-news-digest-25-October.jpg?1271740',
  'https://i.ytimg.com/vi/FH4j1gdJoRQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCkx7liTCmOr6-dP-de8enX-5Nc1w',
  'https://resize.indiatvnews.com/resize/380_-/2024/01/gxcjw97d.jpg',
];

const Banner = () => {
  const [randomImage, setRandomImage] = useState('');

  // Function to get a random image from the newsImages array
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * newsImages.length);
    return newsImages[randomIndex];
  };

  useEffect(() => {
    // Set a timer to update the image every 3 seconds (3000 milliseconds)
    const interval = setInterval(() => {
      const image = getRandomImage();
      setRandomImage(image);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.banner}>
      {/* Display the random news image */}
      <Image source={{ uri: randomImage }} style={styles.image} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 350,
    height: 200,
    marginHorizontal:8,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default Banner;
