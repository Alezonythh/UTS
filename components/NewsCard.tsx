import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';

interface EventProps {
  title: string;
  image: any; 
  tanggal: any;
}

const NewsCard: React.FC<EventProps> = ({ title, image, tanggal }) => {
  return (
    <TouchableOpacity style={tw`bg-white rounded-lg overflow-hidden w-85 h-70`} >
      {/* Event Image */}
      <Image 
        source={image} 
        style={tw`w-80 h-50 m-2`} 
        resizeMode="cover" 
      />

      {/* Event Info */}
      <View style={tw`p-4`}>
        <Text style={tw`text-blue-500 text-sm font-bold`}>{title}</Text>
        <View style={tw`flex-row items-center `}>
          <Text style={tw`text-gray-500 text-xs px-1`}>{tanggal}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
