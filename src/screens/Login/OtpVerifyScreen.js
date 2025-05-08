import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';

export default function OtpVerifyScreen({ route, navigation }) {
  const { mobile } = route.params;
  const [otp, setOtp] = useState('');

  const verifyOtp = async () => {
    try {
      const res = await fetch('http://localhost:3000/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile, otp }),
      });

      const data = await res.json();
      if (data.success) {
        Alert.alert('Login successful');
        navigation.replace('Home');
      } else {
        Alert.alert('OTP incorrect or expired');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Verification failed');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter OTP sent to {mobile}</Text>
      <TextInput
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={4}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Verify OTP" onPress={verifyOtp} />
    </View>
  );
}