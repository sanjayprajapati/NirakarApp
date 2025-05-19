// screens/profile/ProfileScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const isProfileComplete = user?.name && user?.email && user?.mobile;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={
          user?.avatar?.url
            ? { uri: user.avatar.url }
            : require('../../assets/default-avatar.png')
        }
        style={styles.avatar}
      />
      <Text style={styles.name}>{user?.name || 'नाम उपलब्ध नहीं'}</Text>
      <Text style={styles.text}>मोबाइल: {user?.mobile || '—'}</Text>
      <Text style={styles.text}>ईमेल: {user?.email || '—'}</Text>

      {!isProfileComplete && (
        <View style={styles.warningBox}>
          <Text style={styles.warningText}>आपकी प्रोफ़ाइल अधूरी है</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Text style={styles.editButtonText}>प्रोफ़ाइल संपादित करें</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#222',
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  warningBox: {
    marginVertical: 20,
    backgroundColor: '#fff3cd',
    padding: 10,
    borderRadius: 8,
    borderColor: '#ffeeba',
    borderWidth: 1,
  },
  warningText: {
    color: '#856404',
    fontSize: 14,
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
