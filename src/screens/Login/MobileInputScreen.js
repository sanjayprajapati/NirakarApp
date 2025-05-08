import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';

export default function MobileInputScreen({ navigation }) {
  const [mobile, setMobile] = useState('');

  const sendOtp = async () => {
    if (mobile.length !== 10) return Alert.alert('Invalid mobile number');

    try {
      const res = await fetch('http://localhost:3000/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();
      if (data.success) {
        navigation.navigate('OtpVerify', { mobile });
      } else {
        Alert.alert('Error', data.msg);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error sending OTP');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter Mobile Number</Text>
      <TextInput
        value={mobile}
        onChangeText={setMobile}
        keyboardType="number-pad"
        maxLength={10}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Send OTP" onPress={sendOtp} />
    </View>
  );
}