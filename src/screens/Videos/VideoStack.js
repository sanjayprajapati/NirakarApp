// VideoStack.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VideosScreen from './'
import VideoPlayerScreen from "./VideoPlayerScreen";

const Stack = createNativeStackNavigator();

const VideoStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="VideoLIst" component={VideosScreen} options={{ title: "वीडियो सूची" }} />
    <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} options={{ title: "वीडियो विवरण" }} />
  </Stack.Navigator>
);

export default VideoStack;