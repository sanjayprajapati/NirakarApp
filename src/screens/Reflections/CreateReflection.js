// screens/CreateReflection.js
import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { createReflection } from "../../services/reflectionService";

const CreateReflection = ({ token }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (!title || !content) return Alert.alert("Please fill all fields");

    try {
      const res = await createReflection({ title, content }, token);
      Alert.alert("Success", "Reflection posted successfully");
      setTitle("");
      setContent("");
    } catch (error) {
      Alert.alert("Error", error.response?.data?.message || "Failed to post");
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Title</Text>
      <TextInput
        placeholder="Enter Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderBottomWidth: 1, marginBottom: 12 }}
      />
      <Text>Content</Text>
      <TextInput
        placeholder="Write your reflection"
        value={content}
        onChangeText={setContent}
        multiline
        numberOfLines={5}
        style={{ borderWidth: 1, padding: 10, height: 100, marginBottom: 12 }}
      />
      <Button title="Post Reflection" onPress={handleSubmit} />
    </View>
  );
};

export default CreateReflection;
