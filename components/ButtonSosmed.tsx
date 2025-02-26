import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

const ButtonSosmed = ({ icon, text }: { icon: any, text: string }) => {
  return (
    <TouchableOpacity style={tw`p-4 rounded-lg border-neutral-300 border-2 mx-2 flex-row items-center bg-white w-full`}>
      <Ionicons name={icon} size={24} color="black" />
      <Text style={tw`ml-2 text-black`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonSosmed