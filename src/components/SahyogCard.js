import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';

const SahyogCard = () => {
  const handleSupportPress = () => {
    // Replace with your actual UPI or donation page
    const upiLink = 'upi://pay?pa=yourupi@upi&pn=Satsang%20Support';
    Linking.openURL(upiLink);
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Image source={require('../assets/icons/icons8-giving-48.png')} style={styles.icon} />
        <Text style={styles.title}>सहयोग करें 🙏</Text>
      </View>
      <Text style={styles.description}>
        आपके छोटे से सहयोग से गुरुपूर्णिमा, ध्यान सत्र, और अन्य आध्यात्मिक गतिविधियाँ संभव हो पाती हैं।
      </Text>

      <TouchableOpacity onPress={handleSupportPress} style={styles.button}>
        <Text style={styles.buttonText}>सहयोग करें / Donate Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SahyogCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff7ed',
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
    color: '#c2410c',
  },
  description: {
    fontSize: 14,
    color: '#4b3000',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#fb923c',
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
