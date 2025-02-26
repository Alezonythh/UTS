import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';

interface EventProps {
  title: string;
  description: string;
  image: any; 
  icon: string;

}

const EventCard: React.FC<EventProps> = ({ title, description, image, icon }) => {
  return (
    <TouchableOpacity style={tw`bg-gray-800 rounded-lg overflow-hidden w-60 h-80`}>
      {/* Event Image */}
      <Image 
        source={image} 
        style={tw`w-full h-40`} 
        resizeMode="cover" 
      />

      {/* Event Info */}
      <View style={tw`p-4`}>
        <Text style={tw`text-white text-sm font-bold mt-1`}>{title}</Text>
        <Text style={tw`text-gray-400 text-xs mt-1`}>{description}</Text>
        <View style={tw`flex-row items-center mt-10 justify-end`}>
          <Text style={tw`text-white text-xs ml-2 px-1`}>Mulai belajar</Text>
          <FontAwesome5 name={icon} size={24} color="white"/>
        </View>
        
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
