import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import { isZoomMeetingLive } from '../utils/zoom'; // 👈 import actual function

const audioTrack = {
  id: 'morning-meditation',
  url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  title: 'Morning Meditation',
  artist: 'Spiritual Guide',
  artwork: 'https://example.com/art.jpg',
};

const ZOOM_MEETING_URL = 'https://zoom.us/j/https://us02web.zoom.us/j/5212775706?pwd=OUdZTlV6VGl3VDUrNFZzRmhPZVBEdz09';

const MeditationSection = () => {
  const [isZoomLive, setIsZoomLive] = useState(false);
  const playbackState = usePlaybackState();

  useEffect(() => {
    const setup = async () => {
      const zoomLive = await isZoomMeetingLive();
       console.log('zoomLive',zoomLive)
      setIsZoomLive(zoomLive);
      try {
        await TrackPlayer.setupPlayer();
      } catch (err) {
        console.log('Player already initialized');
      }
    };
    setup();
  }, []);

  const togglePlayPause = async () => {
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.reset();
      await TrackPlayer.add(audioTrack);
      await TrackPlayer.play();
    }
  };

  const openZoom = () => {
    Linking.openURL(ZOOM_MEETING_URL).catch(err => {
      Alert.alert('Error', 'Unable to open Zoom meeting.');
      console.error(err);
    });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>🧘‍♂️ ध्यान सत्र</Text>
      <Text style={styles.subtitle}>सुबह 4–5 बजे</Text>

      {isZoomLive ? (
        <TouchableOpacity style={styles.button} onPress={openZoom}>
          <Text style={styles.buttonText}>🔴 Join Live Zoom</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={togglePlayPause}>
          <Text style={styles.buttonText}>
            {playbackState === State.Playing ? '⏸️ Pause Meditation' : '▶️ Play Meditation'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
     card: {
    backgroundColor: '#eef6ff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 5,
    elevation: 3,
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 3,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default MeditationSection;