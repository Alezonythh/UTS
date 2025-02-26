import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const ButtonEvent = ({
  title,
  rute,
  border = true,
  borderColor = 'white'
}: {
  title: string;
  rute: () => void;
  border?: boolean;
  borderColor?: string;
}) => {
  return (
    <TouchableOpacity
      style={[
        tw`px-1 py-1 rounded-lg w-20 mx-1 mb-1`,
        { backgroundColor: 'transparent', borderWidth: border ? 2 : 0, borderColor: borderColor }
      ]}
      onPress={rute}
    >
      <Text style={tw`text-white font-bold text-center p-2`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonEvent;
