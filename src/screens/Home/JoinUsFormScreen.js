import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const JoinUsFormScreen = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async () => {
    if (!name || !mobile) {
      Alert.alert('कृपया नाम और मोबाइल नंबर भरें');
      return;
    }

    try {
      // Dummy API call – replace later with real backend
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name,
        mobile,
      });

      Alert.alert('धन्यवाद!', 'आपकी जानकारी सफलतापूर्वक भेज दी गई है');
      setName('');
      setMobile('');
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('त्रुटि', 'कुछ गलत हुआ, कृपया पुनः प्रयास करें');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>हमसे जुड़ें 🤝</Text>

      <TextInput
        placeholder="आपका नाम"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="मोबाइल नंबर"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>भेजें</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinUsFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafb',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1d4ed8',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
