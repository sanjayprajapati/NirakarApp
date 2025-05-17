import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';
const VideoPlayer = () => {
  const [paused, setPaused] = useState(true);
  // Replace with your server video URL
  const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUrl }} // Server video URL
        style={styles.video}
        controls={true} // Show play/pause, seek bar, etc.
        paused={paused} // Control play/pause state
        resizeMode="contain" // Adjust video scaling
        onError={(error) => console.log('Video Error:', error)} // Handle errors
        onLoad={(data) => console.log('Video Loaded:', data)} // Log when video loads
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5,
  },
});

export default VideoPlayer;