// BhajanListScreen.js
import React, { useState,useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet,ActivityIndicator } from "react-native";

import { API_URL } from '@env';
import axios from "axios";

const BhajanListScreen = ({ navigation }) => {
    const [bhajans, setBhajan] = useState([]);
    const [loading, setLoading] = useState(true);
     console.log(API_URL)
    useEffect(() => {
      const getBhajans = async () => {
        try {
            const response = await axios.get(`http://192.168.43.3:5000/api/v1/all-bhajans?page=1`, {
            headers: {
                'Content-Type': 'application/json',
                // Add other headers if required
            },
            });
           // console.log(response.data.result);
            setBhajan(response.data.result)
            setLoading(false)
        } catch (error) {
            console.error('Network Error:', error.message);
        }
       
      };
      getBhajans();
    }, []);


if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={bhajans}
        
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("BhajanDetail", { bhajan: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: "#ddd" },
  title: { fontSize: 18 },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default BhajanListScreen;