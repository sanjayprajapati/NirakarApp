import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
 
} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import axios from 'axios';

const sevaOptions = [
  'भोजन सेवा',
  'साफ-सफाई सेवा',
  'मंच/साउंड व्यवस्था',
  'पानी वितरण',
  'अन्य',
];

const SevaFormScreen = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedSeva, setSelectedSeva] = useState(sevaOptions[0]);

  const handleSubmit = async () => {
    if (!name || !mobile) {
      Alert.alert('कृपया नाम और मोबाइल नंबर भरें');
      return;
    }

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name,
        mobile,
        seva: selectedSeva,
      });

      Alert.alert('धन्यवाद!', 'आपकी सेवा भावना स्वीकार की गई है');
      setName('');
      setMobile('');
      setSelectedSeva(sevaOptions[0]);
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('त्रुटि', 'कुछ गलत हुआ, कृपया पुनः प्रयास करें');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>सेवा करें 🙏</Text>

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

      <Text style={styles.label}>सेवा का प्रकार चुनें</Text>
      {Platform.OS === 'android' ? (
        <Picker
          selectedValue={selectedSeva}
          onValueChange={(itemValue) => setSelectedSeva(itemValue)}
          style={styles.picker}
        >
          {sevaOptions.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>
      ) : (
        // You can use `react-native-picker-select` for iOS styled select.
        <Text style={styles.input}>{selectedSeva}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>सबमिट करें</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SevaFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fefce8',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#be123c',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#be123c',
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
