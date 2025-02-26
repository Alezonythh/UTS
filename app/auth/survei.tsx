import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import SurveyList from '@/components/SurveyList'
import ButtonPrimary from '@/components/ButtonPrimary'
import { useRouter } from 'expo-router'




const survei = () => {
    const navigation = useRouter();
    const data = [
        {
            id: 1,
            text: 'Co-Founder',
        },
        {
            id: 2,
            text: 'Instagram',
        },
        {
            id: 3,
            text: 'Tiktok'
        },
        {
            id: 4,
            text: 'Youtube',
        },
        {
            id: 5,
            text: 'website',
        },
        {
            id: 6,
            text: 'lainnya',
        },
    ]

    return (
        <SafeAreaView>
            <View style={tw`p-4 mb-40`}>
                <Text style={tw`text-s font-bold text-center text-white mb-2`}>Bagaimana kamu tahu tentang Techxperience?</Text>
                {data.map((item) => (
                <SurveyList key={item.id} text={item.text} />
            ))}
            </View>
        

            <ButtonPrimary title='Selanjutnya' warnaBtn='[#4285f4]' rute={() => navigation.navigate('/')} />
        </SafeAreaView>
    )
}

export default survei