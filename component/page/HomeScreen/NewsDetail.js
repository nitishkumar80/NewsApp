import React from 'react';
import { View, Text } from 'react-native';

const NewsDetail = ({ route }) => {
  const { news } = route.params;

  return (
    <View>
      <Text>Latest News</Text>
      {news.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default NewsDetail;
