import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions, ActivityIndicator,ImageBackground } from "react-native";
import { API_URL } from '@env';
import { client } from "../../api/apiBase";
const { width, height } = Dimensions.get("window");

const QuotesScreen = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const defaultImage = "../../assets/justtest.jpg";
  useEffect(() => {
    console.log(API_URL)
    const getEvents = async () => {
            try {
                const response = await client.get(`/quotes`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                });
                console.log(response.data);
                setQuotes(response.data)
                setLoading(false)
            } catch (error) {
                console.error('Network Error:', error.message);
            }
           
          };
          getEvents();
   
  }, []);

 const renderItem = ({ item }) => {
    const image = item.image || defaultImage;

    return (
      <ImageBackground
        source={require("../../assets/justtest.jpg")}
        style={{
          width,
          height,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
        resizeMode="cover"
      >
        <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(0, 0, 0, 0.4)", // semi-dark overlay
        }}></View>
        <Text style={{ fontSize: 24, color: "#fff", textAlign: "center" }}>"{item.text}"</Text>
        <Text style={{ fontSize: 18, color: "#fff", marginTop: 10 }}>— {item.author || "Anonymous"}</Text>
      </ImageBackground>
    );
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <FlatList
      data={quotes}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => item._id || index.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  quoteContainer: {
    height,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fefefe",
  },
  quoteText: {
    fontSize: 22,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  authorText: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QuotesScreen;