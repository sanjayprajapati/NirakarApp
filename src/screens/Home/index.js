// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet , ScrollView ,TouchableOpacity} from 'react-native';
import { Appbar, Menu } from 'react-native-paper';
import { useTranslation} from "react-i18next";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import i18n from '../../../i18';
import { API_URL } from '@env';
import { client } from '../../api/apiBase';
const isHindi = true;

//const API_URL = 'http://192.168.1.185:5000/api/v1/events'; // eg. http://192.168.1.5:5000

const HomeScreen = () => {
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
      <View style={style.sectionContainer}>
        <Text className="text-lg font-semibold mb-1">
          {isHindi ? "अगला प्रमुख कार्यक्रम" : "Next Major Event"}
        </Text>
        <Text>{isHindi ? "गुरु पूर्णिमा - जुलाई 21, 2025" : "Guru Purnima - July 21, 2025"}</Text>
      </View>

      {/* Bhajan of the Day */}
      <View style={style.sectionContainer}>
        <Text className="text-lg font-semibold mb-1">
          {isHindi ? "आज का भजन" : "Bhajan of the Day"}
        </Text>
        <Text>{isHindi ? "भजन: हे राम नाम की लूट है..." : "Bhajan: He Ram Naam Ki Loot Hai..."}</Text>
      </View>

      {/* Quick Navigation Links */}
      <View style={style.sectionContainer}>
        <TouchableOpacity className="bg-red-100 p-4 rounded-xl items-center w-[30%]">
          <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#D32F2F" />
          <Text className="text-sm mt-1">{isHindi ? "कार्यक्रम" : "Events"}</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-green-100 p-4 rounded-xl items-center w-[30%]">
          <MaterialCommunityIcons name="play-box-outline" size={24} color="#388E3C" />
          <Text className="text-sm mt-1">{isHindi ? "मीडिया" : "Media"}</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-100 p-4 rounded-xl items-center w-[30%]">
          <MaterialCommunityIcons name="book-open-variant" size={24} color="#1976D2" />
          <Text className="text-sm mt-1">{isHindi ? "ज्ञान" : "Gyaan"}</Text>
        </TouchableOpacity>
      </View>
      {/* YouTube Videos */}
      <View className="mb-4">
        <Text className="text-lg font-semibold mb-2">🎥 नवीनतम वीडियो</Text>
        <ScrollView horizontal>
          <Image
            source={{ uri: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" }}
            className="w-40 h-24 mr-2 rounded-xl"
          />
          <Image
            source={{ uri: "https://img.youtube.com/vi/l9nh1l8ZIJQ/0.jpg" }}
            className="w-40 h-24 mr-2 rounded-xl"
          />
        </ScrollView>
      </View>

      {/* CTA Buttons */}
      <View style={style.sectionContainer}>
        <View style={style.InlineFlex}>
        <TouchableOpacity >
          <MaterialCommunityIcons name="hand-heart" size={22} color="#fff" />
          <Text className="text-white mt-1">{isHindi ? "दान करें" : "Donate"}</Text>
        </TouchableOpacity></View>
        <View style={style.InlineFlex}>
        <TouchableOpacity >
          <MaterialCommunityIcons name="account-group-outline" size={22} color="#fff" />
          <Text className="text-white mt-1">{isHindi ? "हमसे जुड़ें" : "Join Us"}</Text>
        </TouchableOpacity></View>
        <View style={style.InlineFlex}> 
        <TouchableOpacity >
          <MaterialCommunityIcons name="heart-circle-outline" size={22} color="#fff" />
          <Text className="text-white mt-1">{isHindi ? "सेवा करें" : "Serve"}</Text>
        </TouchableOpacity>
        </View>
      </View>
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
  }

})