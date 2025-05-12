// BhajanDetailScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const BhajanDetailScreen = ({ route }) => {
  console.log(route.params); 
  const bhajan = route?.params?.bhajan;

 if (!bhajan) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>कोई भजन चयनित नहीं किया गया है।</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{bhajan.title}</Text>
      <Text style={{ marginTop: 12 }}>{bhajan.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  content: { fontSize: 18, lineHeight: 26 },
});

export default BhajanDetailScreen;