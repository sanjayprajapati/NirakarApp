import { View, Text,Button } from 'react-native'
import React from 'react'

export default function VideosScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Videos</Text>
      <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
    </View>
  )
}