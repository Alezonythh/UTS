import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const SurveyList = ({text} : any) => {
    const [box, setBox] = useState(false);

    return (
        <View style={tw`flex-row items-center justify-between bg-neutral-800 p-4 rounded-lg mb-1 border`}>
            <Text style={tw`ml-2 text-white`}>{text}</Text>
            <TouchableOpacity style={tw`pt-1`} onPress={() => setBox(!box)}>
                <MaterialCommunityIcons name={box ? "checkbox-marked-circle-outline" : "checkbox-blank-circle-outline"} size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default SurveyList