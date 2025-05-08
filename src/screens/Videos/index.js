import { View, Text,Button,FlatList ,TouchableOpacity,Image, StyleSheet} from 'react-native'
import React, { useState,useEffect } from 'react'
import { YOUR_CHANNEL_ID,YOUTUBE_API_KEY} from  '@env'

export default function VideosScreen({navigation}) {
  const [videos,setVideos] =useState([])
  
  const fetchVideos = async () => {
    //console.log(`${YOUTUBE_API_KEY}`);
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUR_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
    );
    const data = await response.json();
    console.log(data.items)
    return data.items;
  };
  useEffect(() => {
    //console.log(`${YOUTUBE_API_KEY}`);
    const loadVideos = async () => {
      try {
        const fetchedVideos = await fetchVideos();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    loadVideos();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Videos</Text>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => {
          console.log("Rendering item:", item.snippet.thumbnails.medium.url);
        return(
          <View style={style.IMageContainer}> 
          <TouchableOpacity onPress={() =>
    navigation.navigate('VideoPlayer', {
      videoId: item.id.videoId,
      title: item.snippet.title,
    })
  }>
            <Image source={{ uri: item.snippet.thumbnails.medium.url }} resizeMode="contain" style={{width:'100%',height:190}} />
            <Text style={style.yTitle}>{item.snippet.title}</Text>
          </TouchableOpacity>
          </View>
        )}}
      />
    </View>
  )

  
}
const style= StyleSheet.create({
  IMageContainer:{
    width:'100%',
    padding:10
  },
    yTitle:{
      fontSize:16,
      fontWeight:'bold',
      color:'#000'
    }  })