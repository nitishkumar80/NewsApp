import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { NativeBaseProvider, FlatList } from "native-base";
import moment from "moment"; // Import moment library
import { service } from "../../config/cryptoservice";

const Health = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    service("health")
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const openNewsLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity onPress={() => openNewsLink(item.url)}>
      <View style={styles.newsContainer}>
      <Image resizeMode='cover'   style={{ width: 355, height: 200 }} source={{ uri: item.urlToImage }} accessibilityLabel="Alternate Text" />


        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{moment(item.publishedAt).format("LLL")}</Text>
        <Text style={styles.newsDescription}>{item.description}</Text>
       {/* <Text style={styles.newsContent}>{item.content}</Text> */}

      </View>
    </TouchableOpacity>
  );

  return (
    <NativeBaseProvider>
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item, index) => (item.id || index).toString()}
      />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "600",
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
  },
   newsContent: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20, // Adjust line height as needed
    maxHeight: 100, // Limit the maximum height of the content
    overflow: "hidden",
    // Apply ellipsis for overflow text
    textOverflow: "ellipsis",
  },
});

export default Health;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

// export const Health = () => {
//   const [newsArticles, setNewsArticles] = useState([]);
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     // Fetch news articles from a News API
//     fetchNewsArticles();
//     // Fetch videos from a Video API
//     fetchVideos();
//   }, []);

//   const fetchNewsArticles = async () => {
//     try {
//       const YOUR_API_KEY = '5ddb2c05e471410fb2a3b79ec822dff9';
//       const newsResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${YOUR_API_KEY}`);
//       const newsData = await newsResponse.json();
//       setNewsArticles(newsData.articles || []); // Ensure that newsData.articles is an array or default to an empty array
//     } catch (error) {
//       console.error('Error fetching news:', error);
//     }
//   };

//   const fetchVideos = async () => {
//     try {
//       const YOUR_VIDEO_KEY = 'AIzaSyCSxPDSiWbnURaTkMKg4Tc78SPSppsOcRk';
//       const videoResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUR_VIDEO_KEY}&type=video&q=news`);
//       const videoData = await videoResponse.json();
//       setVideos(videoData.items || []);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };
  

//   const openLink = (url) => {
//     Linking.openURL(url).catch((err) => console.error("An error occurred", err));
//   };

//   return (
//     <ScrollView>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Latest News</Text>
//         {videos.map((video, index) => (
//   <TouchableOpacity key={index} onPress={() => openLink(video.videoUrl)}>
//     <View style={styles.videoContainer}>
//       {/* Display video thumbnail */}
//       <Image
//         style={styles.videoThumbnail}
//         source={{ uri: video.thumbnail || '' }} // Use default value if thumbnail is undefined
//         resizeMode="cover"
//       />

//       {/* Check if video.title exists before rendering */}
//       <Text style={styles.videoTitle}>{video.title ? video.title : 'Title not available'}</Text>
      
//       {/* Check if video.description exists before rendering */}
//       <Text style={styles.videoDescription}>{video.description ? video.description : 'Description not available'}</Text>
//     </View>
//   </TouchableOpacity>




//         ))}
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Featured Videos</Text>
//         {videos.map((video, index) => (
//           <TouchableOpacity key={index} onPress={() => openLink(video.videoUrl)}>
//             <View style={styles.videoContainer}>
//               {/* Display video thumbnail or other video information */}
//               <Image
//                 style={styles.videoThumbnail}
//                 source={{ uri: video.thumbnail }} // Adjust based on your API response
//                 resizeMode="cover"
//               />
//               <Text style={styles.videoTitle}>{video.title}</Text>
//               <Text style={styles.videoDescription}>{video.description}</Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// // const styles = StyleSheet.create({
// //   // Your styles remain unchanged
// // });


// const styles = StyleSheet.create({
//   section: {
//     padding: 10,
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   newsContainer: {
//     marginBottom: 15,
//   },
//   newsImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 8,
//   },
//   newsTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   newsDescription: {
//     fontSize: 16,
//     marginTop: 5,
//     color: 'gray',
//   },
//   videoContainer: {
//     marginBottom: 15,
//   },
//   videoThumbnail: {
//     width: '100%',
//     height: 200,
//     borderRadius: 8,
//   },
//   videoTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   videoDescription: {
//     fontSize: 16,
//     marginTop: 5,
//     color: 'gray',
//   },
// });



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

// export const Health = () => {
//   const [newsArticles, setNewsArticles] = useState([]);
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     // Fetch news articles from a News API
//     fetchNewsArticles();
//     // Fetch videos from a Video API
//     fetchVideos();
//   }, []);

//   const fetchNewsArticles = async () => {
//     try {
//       const YOUR_API_KEY = '5ddb2c05e471410fb2a3b79ec822dff9';
//       const newsResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${YOUR_API_KEY}`);
//       const newsData = await newsResponse.json();
//       setNewsArticles(newsData.articles || []);
//     } catch (error) {
//       console.error('Error fetching news:', error);
//     }
//   };

//   const fetchVideos = async () => {
//     try {
//       const YOUR_VIDEO_KEY = 'AIzaSyCSxPDSiWbnURaTkMKg4Tc78SPSppsOcRk';
//       const videoResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUR_VIDEO_KEY}&type=video&q=news`);
//       const videoData = await videoResponse.json();
//       setVideos(videoData.items || []);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   const openLink = (url) => {
//     Linking.openURL(url).catch((err) => console.error("An error occurred", err));
//   };

//   return (
//     <ScrollView>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Latest News</Text>
//         {videos.map((video, index) => (
//   <TouchableOpacity key={index} onPress={() => openLink(`https://www.youtube.com/watch?v=${video.id.videoId}`)}>
//     <View style={styles.videoContainer}>
//       {video.snippet && video.snippet.thumbnails && video.snippet.thumbnails.default && (
//         <Image
//           style={styles.videoThumbnail}
//           source={{ uri: video.snippet.thumbnails.default.url }}
//           resizeMode="cover"
//         />
//       )}
//       <Text style={styles.videoTitle}>{video.snippet ? video.snippet.title : 'Title not available'}</Text>
//       <Text style={styles.videoDescription}>{video.snippet ? video.snippet.description : 'Description not available'}</Text>
//     </View>
//   </TouchableOpacity>
// ))}

        
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Featured Videos</Text>
//         {videos.map((video, index) => (
//   <TouchableOpacity key={index} onPress={() => openLink(`https://www.youtube.com/watch?v=${video.id.videoId}`)}>
//     <View style={styles.videoContainer}>
//       {video.snippet && video.snippet.thumbnails && video.snippet.thumbnails.default && (
//         <Image
//           style={styles.videoThumbnail}
//           source={{ uri: video.snippet.thumbnails.default.url }}
//           resizeMode="cover"
//         />
//       )}
//       <Text style={styles.videoTitle}>{video.snippet ? video.snippet.title : 'Title not available'}</Text>
//       <Text style={styles.videoDescription}>{video.snippet ? video.snippet.description : 'Description not available'}</Text>
//     </View>
//   </TouchableOpacity>


//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   section: {
//     padding: 10,
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   newsContainer: {
//     marginBottom: 15,
//   },
//   newsImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 8,
//   },
//   newsTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   newsDescription: {
//     fontSize: 16,
//     marginTop: 5,
//     color: 'gray',
//   },
//   videoContainer: {
//     marginBottom: 15,
//   },
//   videoThumbnail: {
//     width: '100%',
//     height: 200,
//     borderRadius: 8,
//   },
//   videoTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   videoDescription: {
//     fontSize: 16,
//     marginTop: 5,
//     color: 'gray',
//   },
// });

// export default Health;
