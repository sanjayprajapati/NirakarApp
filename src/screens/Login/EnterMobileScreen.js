import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios'; // Axios install होना चाहिए
import {client} from '../../api/apiBase';

export default function EnterMobileScreen() {
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSendOtp = async () => {
    const cleaned = mobile.trim();
    if (!/^[6-9]\d{9}$/.test(cleaned)) {
      Alert.alert('Error', 'कृपया वैध मोबाइल नंबर दर्ज करें');
      return;
    }

    try {
      setLoading(true);

      const response = await client.post('/auth/request-otp', {
        mobile: cleaned,
      });

      if (response.data.success) {
        navigation.navigate('OtpVerification', {mobile: cleaned});
      } else {
        Alert.alert('Error', response.data.message || 'कुछ गलत हो गया');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'सर्वर से कनेक्ट नहीं हो सका');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Image
        source={require('../../assets/satsang_logo.png')}
        style={styles.logo}
      />
      <Text style={styles.heading}>मोबाइल नंबर अंकित करें</Text>

      <TextInput
        style={styles.input}
        placeholder="10 अंकों का मोबाइल नंबर"
        keyboardType="phone-pad"
        maxLength={10}
        value={mobile}
        onChangeText={setMobile}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSendOtp}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>OTP भेजें</Text>
        )}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    alignSelf: 'center',
  },
  buttonText: {color: '#fff', fontSize: 18, fontWeight: 'bold'},
});
