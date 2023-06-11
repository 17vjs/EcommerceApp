import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF", alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name='settings' size={200} />
      <Text>Settings goes here...</Text>
    </View>
  )};
export default SettingsScreen;
