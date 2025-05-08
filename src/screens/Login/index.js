import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [mobile, setMobile] = useState('');

  const handleSendOTP = async () => {
    // Validate mobile number (basic)
    if (mobile.length !== 10) {
      alert("कृपया 10 अंकों का मोबाइल नंबर दर्ज करें");
      return;
    }

    // Call backend API to send OTP
    try {
      const res = await fetch('http://your-server.com/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();
      if (data.success) {
        navigation.navigate('OtpVerify', { mobile });
      } else {
        alert('OTP भेजने में समस्या आई');
      }
    } catch (error) {
      alert("Server error: " + error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>मोबाइल नंबर दर्ज करें:</Text>
      <TextInput
        keyboardType="number-pad"
        maxLength={10}
        value={mobile}
        onChangeText={setMobile}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="OTP भेजें" onPress={handleSendOTP} />
    </View>
  );
}