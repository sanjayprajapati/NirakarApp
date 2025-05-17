import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SevaCard = ({ onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Image source={require('../assets/icons/customer-service.png')} style={styles.icon} />
        <Text style={styles.title}>सेवा करें 🙏</Text>
      </View>
      <Text style={styles.description}>
        क्या आप किसी भी प्रकार से सेवा देना चाहते हैं? तकनीकी, आयोजन या अन्य सहयोग हेतु यहाँ से आवेदन करें।
      </Text>

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>सेवा देने के लिए आवेदन करें</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SevaCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ecfdf5',
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
    color: '#059669',
  },
  description: {
    fontSize: 14,
    color: '#065f46',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#10b981',
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
