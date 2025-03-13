import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';

interface EventProps {
    title: string;
    description: string;
    image: any; 
    rute: () => void;
    icon: string;
    number: any;
    jenis: any;
    status: 'Free' | 'Pro';
}

const AkademiCard: React.FC<EventProps> = ({ title, description, image, icon, number, jenis, status, rute }) => {
    return (
        <TouchableOpacity style={tw`flex-row items-center mb-2 w-full`} onPress={rute}>
            {/* Event Image */}
            <View style={tw`relative`}>
                <Image 
                    source={image} 
                    style={tw`w-40 h-24 rounded-xl mr-4 ml-4`} 
                    resizeMode="cover" 
                />
                <Text style={tw`absolute bottom-2 right-2 ${status === 'Free' ? 'bg-red-500' : 'bg-yellow-500'} text-white text-xs px-2 py-1 mx-3 rounded`}>
                    {status}
                </Text>
            </View>

            {/* Event Info */}
            <View style={tw`flex-1 p-2`}>
                <Text style={tw`text-gray-400 text-xs mt-1`}>{jenis}</Text>
                <Text style={tw`text-white text-sm font-bold`}>{title}</Text>
                <Text style={tw`text-gray-400 text-xs mt-1`}>{description}</Text>
                <View style={tw`flex-row items-center mt-2`}>
                    <FontAwesome5 name={icon} size={16} color="white"/>
                    <Text style={tw`text-white text-xs ml-1 `}>{number}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default AkademiCard;
