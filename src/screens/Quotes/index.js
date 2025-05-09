import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const { width, height } = Dimensions.get('window');

const QuotesScreen = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const getQuotes = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log(data); // Check what's coming
      setQuotes(data.results);
      setLoading(false);
    } catch (error) {
      console.error("API ERROR:", error);
    }
  };
  getQuotes();
}, []);

  const renderItem = ({ item }) => (
    <ImageBackground source={{ uri: 'https://source.unsplash.com/random' }} style={styles.card}>
      <View style={styles.overlay}>
        <Text style={styles.text}>{item}</Text>
        <Text style={styles.author}>— {item.author}</Text>
      </View>
    </ImageBackground>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <FlatList
      data={quotes}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    color: '#ddd',
    textAlign: 'center',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default QuotesScreen;