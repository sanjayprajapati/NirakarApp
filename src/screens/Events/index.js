import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';

import { API_URL } from '@env';
import { client } from '../../api/apiBase';
const EventsScreen = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
  const [selectedCategory, setSelectedCategory] = useState('Daily');
  const fetchEvents = async () => {
    try {
      const response = await client(`/events`);
      ;
      setEvents(response.data.result);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(
  event => event.category === selectedCategory
);

  const renderItem = ({ item }) => (
    <View >
      {item.category === 'Yearly' ?(
        <View style={styles.card}>
      {item.banner ? (
        <Image source={{ uri: item.banner }} style={styles.image} />
      ) : null}
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.dateTime}>{item.date?.slice(0, 10)} | {item.time}</Text>
      <Text style={styles.place}>{item.place}</Text>
      <Text style={styles.organizer}>आयोजक: {item.organizer}</Text>
      <Text style={styles.category}>श्रेणी: {item.category}</Text>
    </View>
      ):null}
      
    </View>
  );

  
  if (loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#6200ee" />
        </View>
      );
    }

  return (
    <>
   <View horizontal showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
  {categories.map(cat => (
    <TouchableOpacity
      key={cat}
      onPress={() => setSelectedCategory(cat)}
      style={{
        backgroundColor: selectedCategory === cat ? '#6200ee' : '#e0e0e0',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginRight: 10,
      }}
    >
      <Text style={{ color: selectedCategory === cat ? 'white' : 'black' }}>{cat}</Text>
    </TouchableOpacity>
  ))}

   {filteredEvents.map(event => (
    <View key={event._id} style={{ padding: 15, marginVertical: 5, backgroundColor: '#fff', borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{event.name}</Text>
      <Text>{event.place}</Text>
      <Text>{new Date(event.date).toDateString()} at {event.time}</Text>
    </View>
  ))}
</View>
     </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fee4b4'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 2
  },
  image: {
    width: '100%',
    height: 0,
    borderRadius: 8,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222'
  },
  dateTime: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4
  },
  place: {
    fontSize: 14,
    color: '#333'
  },
  organizer: {
    fontSize: 13,
    color: '#666'
  },
  category: {
    fontSize: 13,
    color: '#999',
    marginTop: 4
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default EventsScreen;