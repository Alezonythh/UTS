import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

interface EventProps {
    image: any; 
}

const ImageEvent: React.FC<EventProps> = ({ image }) => {
    return (
        <TouchableOpacity style={tw`bg-gray-800 rounded-lg m-2 overflow-hidden w-95 h-40`}>
            {/* Event Image */}
            <Image 
                source={image} 
                style={tw`w-full h-full`} 
                resizeMode="cover" 
            />
        </TouchableOpacity>
    );
};

export default ImageEvent;
