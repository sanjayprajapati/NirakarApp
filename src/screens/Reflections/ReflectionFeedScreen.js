import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// Dummy data
const reflectionsData = [
  {
    id: '1',
    user: {
      name: 'Anjali Sharma',
      profilePic: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    postedAt: '1 hour ago',
    title: 'आज की ध्यान अनुभूति',
    content: 'ध्यान में गहराई से उतरने का अनुभव मिला। मन शांत हुआ और एकाग्रता बढ़ी।',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    likes: 24,
    comments: 3,
    shares: 2,
  },
  {
    id: '2',
    user: {
      name: 'Ravi Kumar',
      profilePic: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    postedAt: '2 hours ago',
    title: 'प्रकृति के साथ एक अनुभव',
    content:
      'आज सुबह प्रकृति के बीच चलना एक अद्भुत अनुभव था। हवा की सरसराहट और पक्षियों की चहचहाहट ने मन को सुकून दिया।',
    mediaType: 'none',
    mediaUrl: '',
    likes: 15,
    comments: 1,
    shares: 1,
  },
  {
    id: '3',
    user: {
      name: 'Sneha Verma',
      profilePic: 'https://randomuser.me/api/portraits/women/22.jpg',
    },
    postedAt: '3 hours ago',
    title: 'ध्यान के दौरान विचार',
    content: 'ध्यान करते हुए कुछ पुरानी यादें भी सामने आईं, लेकिन मैंने उन्हें जाने दिया।',
    mediaType: 'video',
    mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // we won't play video here, just show placeholder
    likes: 30,
    comments: 10,
    shares: 5,
  },
];

const windowWidth = Dimensions.get('window').width;

export default function ReflectionFeedScreen() {
  const [reflections, setReflections] = useState(reflectionsData);

  const renderMedia = (item) => {
    if (item.mediaType === 'image') {
      return (
        <Image
          source={{ uri: item.mediaUrl }}
          style={styles.mediaImage}
          resizeMode="cover"
        />
      );
    } else if (item.mediaType === 'video') {
      // Just show a video placeholder icon or thumbnail
      return (
        <View style={styles.videoPlaceholder}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>▶ Video</Text>
        </View>
      );
    } else {
      return null;
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Header: Profile pic + name + time */}
      <View style={styles.header}>
        <Image source={{ uri: item.user.profilePic }} style={styles.profilePic} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text style={styles.postedAt}>{item.postedAt}</Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>{item.title}</Text>

      {/* Content */}
      <Text style={styles.content} numberOfLines={3}>
        {item.content}
      </Text>

      {/* Media */}
      {renderMedia(item)}

      {/* Action buttons */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>❤️ {item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>💬 {item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>↗️ {item.shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={reflections}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 10, paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  userName: {
    fontWeight: '700',
    fontSize: 16,
    color: '#333',
  },
  postedAt: {
    color: '#666',
    fontSize: 12,
  },
  title: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 6,
    color: '#111',
  },
  content: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
  },
  mediaImage: {
    width: '100%',
    height: windowWidth * 0.5,
    borderRadius: 10,
    marginBottom: 8,
  },
  videoPlaceholder: {
    width: '100%',
    height: windowWidth * 0.5,
    borderRadius: 10,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  actionText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '600',
  },
});
