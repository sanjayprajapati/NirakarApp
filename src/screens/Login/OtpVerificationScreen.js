import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,Image,KeyboardAvoidingView ,ActivityIndicator,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { useAuth } from '../../context/Authcontext'; // adjust path if needed
import { client } from '../../api/apiBase';

const VerifyOtpScreen = ({ route }) => {
  const { mobile } = route.params;
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleVerify = async () => {
    if (!otp || otp.length !== 6) {
      Alert.alert('Error', 'Please enter a valid 6-digit OTP');
      return;
    }

    setLoading(true);
    try {
      const res = await client.post('/auth/verify-otp', {
        mobile,
        otp,
      });

      const token = res.data.token;
      console.log('token',token)
      // Use login from AuthContext to save token + fetch user
      await login(token);
    } catch (err) {
      console.error('OTP verify failed:', err.response?.data || err.message);
      Alert.alert('Verification Failed', err.response?.data?.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Image source={require('../../assets/satsang_logo.png')} style={styles.logo} />
      <Text style={styles.label}>Enter OTP sent to {mobile}</Text>
      <TextInput
        style={styles.input}
        placeholder="6-digit OTP"
        keyboardType="numeric"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleVerify} disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>सत्यापित करें </Text>
              )}
            </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default VerifyOtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
