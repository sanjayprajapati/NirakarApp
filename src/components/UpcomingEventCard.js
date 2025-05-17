import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UpcomingEventCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('EventDetails', { eventId: 'guru-poornima' })}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' }} // Replace with your event banner
          style={styles.image}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>गुरु पूर्णिमा 2025</Text>
        <Text style={styles.subtitle}>13 जुलाई, रविवार | प्रातः 9 बजे से</Text>
        <Text style={styles.description}>
          विशेष सत्संग, भजन, प्रवचन एवं प्रसाद वितरण। अपने परिवार सहित पधारें।
        </Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>विवरण देखें</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UpcomingEventCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fef9c3',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#fde68a',
  },
  imageContainer: {
    height: 160,
    backgroundColor: '#fde68a',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7c2d12',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#78350f',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: '#4b5563',
    marginBottom: 12,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#ca8a04',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff7ed',
    fontWeight: '600',
    fontSize: 14,
  },
});
