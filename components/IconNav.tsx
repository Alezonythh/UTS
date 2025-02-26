import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const { width } = Dimensions.get('window');


const IconNav = ({ icon, title }) => {
  return (
    <TouchableOpacity style={[tw`items-center border-r-4 border-blue-500 bg-neutral-700 rounded-lg w-20 h-27 pt-2 mt-2 mb-4`]}> 
      <View style={tw``}> 
        <Text style={tw`text-lg`}>{icon}</Text> 
      </View>
      <Text style={tw`mt-2 text-center text-white`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default IconNav;
