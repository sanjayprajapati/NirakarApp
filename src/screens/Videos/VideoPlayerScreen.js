// VideoPlayerScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function VideoPlayerScreen({ route }) {
  const { videoId, title } = route.params;

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={240}
        play={true}
        videoId={videoId}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});