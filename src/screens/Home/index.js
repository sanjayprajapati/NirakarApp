// HomeScreen.js
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView ,StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const isHindi = true;

const HomeScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Banner */}
      <View style={style.sectionContainer}>
        <Image
          source={require("../../assets/satsang_logo.png")}
          style={style.imageWidhth}
          resizeMode="contain"
        />
        <Text className="text-xl font-bold text-red-700">
          {isHindi ? "ॐ नमः शिवाय | जय गुरुदेव" : "Om Namah Shivaya | Jai Gurudev"}
        </Text>
      </View>

      {/* Today's Offline Satsang Info */}
      <View style={style.sectionContainer}>
        <Text className="text-lg font-semibold mb-1">
          {isHindi ? "आज का सत्संग" : "Today's Satsang"}
        </Text>
        <Text>{isHindi ? "स्थान: पनकी, कानपुर" : "Location: Panki, Kanpur"}</Text>
        <Text>{isHindi ? "समय: शाम 6 बजे" : "Time: 6 PM"}</Text>
        <Text>{isHindi ? "संपर्क: 9876543210" : "Contact: 9876543210"}</Text>
      </View>

      {/* Zoom Satsang Status */}
      <View style={style.sectionContainer}>
        <Text className="text-lg font-semibold mb-1">
          {isHindi ? "ज़ूम सत्संग स्थिति" : "Zoom Satsang Status"}
        </Text>
        <Text className="text-green-700 font-bold">
          {isHindi ? "LIVE चल रहा है" : "LIVE Now"}
        </Text>
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

      {/* CTA Buttons */}
      <View style={style.sectionContainer}>
        <TouchableOpacity className="bg-red-600 px-4 py-3 rounded-xl w-[30%] items-center">
          <MaterialCommunityIcons name="hand-heart" size={22} color="#fff" />
          <Text className="text-white mt-1">{isHindi ? "दान करें" : "Donate"}</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-orange-600 px-4 py-3 rounded-xl w-[30%] items-center">
          <MaterialCommunityIcons name="account-group-outline" size={22} color="#fff" />
          <Text className="text-white mt-1">{isHindi ? "हमसे जुड़ें" : "Join Us"}</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-green-600 px-4 py-3 rounded-xl w-[30%] items-center">
          <MaterialCommunityIcons name="heart-circle-outline" size={22} color="#fff" />
          <Text className="text-white mt-1">{isHindi ? "सेवा करें" : "Serve"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
const style=StyleSheet.create({
  sectionContainer:{
    display:"flex",
    padding:20,
    backgroundColor:'#fff',
    boxShadowColor:'#ccc',
    margin:5,
    borderRadius:10,
    borderWidth:1
  },
  imageWidhth: {
    maxWidth:200,
    height:200,
  }

})