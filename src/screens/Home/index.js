// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet , ScrollView ,TouchableOpacity} from 'react-native';
import { Appbar, Menu } from 'react-native-paper';
import { useTranslation} from "react-i18next";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import i18n from '../../../i18';
import { API_URL } from '@env';
import { client } from '../../api/apiBase';
import VideoPlayer from '../../components/VideoPlayer';
import MeditationSection from '../../components/MeditationSection';
import SahyogCard from '../../components/SahyogCard';
import JoinUsCard from '../../components/JoinCard';
import SevaCard from '../../components/SevaCard';
const isHindi = true;

//const API_URL = 'http://192.168.1.185:5000/api/v1/events'; // eg. http://192.168.1.5:5000

const HomeScreen = ({navigation}) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const response = await client(`/events`);
      ;
      console.log('response.data',response.data)
      setEvents(response.data.result); // adjust key as per your response
      setLoading(false)
    } catch (error) {
      console.error("Error fetching events:", error);
    } 
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  const renderItem = ({ item }) => (
    <View style={style.card}>
      {item.banner && (
        <Image source={{ uri: item.banner }} style={style.image} />
      )}
      <Text style={style.title}>{item.name}</Text>
      <Text>{item.date?.slice(0, 10)} | {item.time}</Text>
      <Text>{item.place}</Text>
      <Text>{item.organizer}</Text>
    </View>
  );

  if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }

  return (
    <>
    {/* <Appbar.Header>
        <Appbar.Content  />
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <Appbar.Action icon="menu" color="black" onPress={() => setVisible(true)} />
          }
        >
          <Menu.Item onPress={() => console.log('Settings')} title="Settings" />
          <Menu.Item onPress={() => console.log('Logout')} title="Logout" />
        </Menu>
      </Appbar.Header> */}
    <ScrollView className="flex-1 bg-white p-4" style={{padding:12,margin:0,backgroundColor:'#fee4b4'}}>
      {/* Banner */}
      <View style={style.sectionContainer}>
        <Image
          source={require("../../assets/satsang_logo.png")}
          style={style.imageWidhth}
          resizeMode="contain"
        />
        
        <Text style={style.bannerText}>
          {isHindi ? "जय श्री महताब" : "Jai Shree Mahtab"}
        </Text>
        <TouchableOpacity
  className="self-end mb-3"
  onPress={() => i18n.changeLanguage(i18n.language === "hi" ? "en" : "hi")}
>
  {/* <Text className="text-blue-500 underline">
    {i18n.language === "hi" ? "Switch to English" : "हिंदी में बदलें"}
  </Text> */}
</TouchableOpacity>
      </View>

      {/* Today's Offline Satsang Info */}
      <Text style={style.sectionHeading}>{isHindi ? "आज के कार्यक्रम" : "Today's Programs"}</Text>
      <View style={style.sectionContainer}>
        <View><Text style={style.subHeading}>{isHindi ? "आज का सत्संग" : "Today's Satsang"}</Text></View>
        <Text style={style.text}>{isHindi ? "स्थान: पनकी, कानपुर" : "Location: Panki, Kanpur"}</Text>
        <Text style={style.text}>{isHindi ? "समय: शाम 6 बजे" : "Time: 6 PM"}</Text>
        <Text style={style.text}>{isHindi ? "संपर्क: 9876543210" : "Contact: 9876543210"}</Text>
      </View>

      {/* Zoom Satsang Status */}
      <View style={style.sectionContainer}>
        { events.map((item) => (
        <View key={item._id} style={style.card}>
          {item.banner ? (
            <Image source={{ uri: item.banner }} style={style.image} />
          ) : null}
          <Text style={style.title}>{item.name}</Text>
          <Text style={style.dateTime}>{item.date?.slice(0, 10)} | {item.time}</Text>
          <Text style={style.place}>{item.place}</Text>
          <Text style={style.organizer}>आयोजक: {item.organizer}</Text>
          <Text style={style.category}>श्रेणी: {item.category}</Text>
        </View>
      ))}
      </View>

      {/* Next Major Event */}
      {/* <VideoPlayer /> */}
      <MeditationSection />
      

      {/* Bhajan of the Day */}
      

      {/* Quick Navigation Links */}
      
      {/* YouTube Videos */}
     
      <SahyogCard />
      <JoinUsCard  onPress={() => {
        navigation.navigate('JoinForm');
      }} />
      {/* CTA Buttons */}
      <SevaCard onPress={() => {
        navigation.navigate('SevaForm');
      }} />
    </ScrollView></>
  );
};

export default HomeScreen;
const style=StyleSheet.create({
  text:{
    fontSize:15,
    color:'#000'
 },
  sectionContainer:{
    padding:12,
    backgroundColor:'#fdd382',
    boxShadowColor:'#ccc',
    marginBottom:20,
    borderRadius:20,
    borderWidth:0,
  },
  sectionHeading:{
    fontSize:26,
    fontWeight:'bold',
    color:'#66390a',
    marginBottom:15
  },
  subHeading:{
    fontSize:20,
    fontWeight:'bold',
    color:'#1e5b7d',
    marginBottom:8
  },
  imageWidhth: {
    width:'100%',
    height:100,
    marginBottom:10
  },
  bannerText: {
    color:'#1e5b7d',
    fontSize:28,
    textAlign: 'center',
    width:'100%'
  },
  InlineFlex: {
    display:'inline-flex',
    width:'28%'
  },
   card: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 3,
  },
  image: {
    height: 0,
    borderRadius: 6,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

})