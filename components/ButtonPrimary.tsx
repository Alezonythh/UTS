import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const ButtonPrimary = ({
  title,
  warnaBtn,
  rute,
  border = false,
  borderColor = 'transparent'
}: {
  title: string;
  warnaBtn: string;
  rute: () => void;
  border?: boolean;
  borderColor?: string;
}) => {
  return (
    <TouchableOpacity
      style={tw`
        bg-${warnaBtn} px-4 py-2 rounded-lg w-80 mx-auto mb-1
        ${border ? `border-2 border-${borderColor}` : ''}
      `}
      onPress={rute}
    >
      <Text style={tw`text-white font-bold text-center p-2`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
