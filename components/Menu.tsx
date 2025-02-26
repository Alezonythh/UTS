import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

interface MenuProps {
    icon: string;
    title: string;
    buttonColor?: string;
    textColor?: string;
}

const Menu: React.FC<MenuProps> = ({ icon, title, buttonColor = '#1F2937', textColor = '#FFFFFF',}) => {
    return (
        <TouchableOpacity style={[tw`flex-row items-center justify-between p-3 rounded-lg bg-gray-900`, { borderLeftWidth: 4, borderLeftColor: '#4285f4' }]} >
            <View style={tw`flex-row items-center`}>
                <View style={[tw`rounded-lg items-center justify-center`, { backgroundColor: buttonColor }]}>
                    <Ionicons name={icon} size={20} color="white" />
                </View>
                <Text style={[tw`ml-4 text-sm font-semibold`, { color: textColor }]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Menu;
