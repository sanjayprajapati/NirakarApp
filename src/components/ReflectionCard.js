// components/ReflectionCard.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av'; // Only if you want to support audio playback

const ReflectionCard = ({ reflection }) => {
  const {
    userName,
    profilePicUrl,
    title,
    content,
    mediaType,
    mediaUrl,
    isAnonymous,
    createdAt,
    likes,
    comments,
  } = reflection;

  const displayName = isAnonymous ? 'कोई साधक' : userName;
  const displayPic = isAnonymous
    ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    : profilePicUrl;

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: displayPic }} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>{displayName}</Text>
          <Text style={styles.timestamp}>{new Date(createdAt).toLocaleString()}</Text>
        </View>
      </View>

      {/* Title + Content */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>

      {/* Media Preview */}
      {mediaType === 'image' && (
        <Image source={{ uri: mediaUrl }} style={styles.mediaImage} />
      )}
      {mediaType === 'video' && (
        <Video
          source={{ uri: mediaUrl }}
          style={styles.video}
          controls
          resizeMode="contain"
        />
      )}
      {mediaType === 'audio' && (
        <Text style={styles.audioNotice}>🎧 Audio reflection - Tap to play</Text>
      )}

      {/* Likes & Comments */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconRow}>
          <Icon name="heart-outline" size={20} color="#333" />
          <Text style={styles.count}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconRow}>
          <Icon name="chatbubble-ellipses-outline" size={20} color="#333" />
          <Text style={styles.count}>{comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  timestamp: {
    color: '#888',
    fontSize: 12,
  },
  avatar: {
    width: 40, height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    marginVertical: 4,
    fontWeight: '600',
  },
  content: {
    color: '#444',
    marginBottom: 8,
  },
  mediaImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 8,
  },
  video: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
  },
  audioNotice: {
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  count: {
    fontSize: 14,
  },
});

export default ReflectionCard;
