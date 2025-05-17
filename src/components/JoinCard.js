import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const JoinUsCard = ({ onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Image source={require('../assets/icons/united.png')} style={styles.icon} />
        <Text style={styles.title}>हमसे जुड़ें 🤝</Text>
      </View>
      <Text style={styles.description}>
        क्या आप नियमित सत्संग, ध्यान व अन्य कार्यक्रमों से जुड़ना चाहते हैं? अपनी जानकारी साझा करें।
      </Text>

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Join Now / जानकारी भेजें</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinUsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eef6ff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 5,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1d4ed8',
  },
  description: {
    fontSize: 14,
    color: '#1e3a8a',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});