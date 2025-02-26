import { View, Text, Image } from 'react-native'
import React from 'react'
import ButtonPrimary from '@/components/ButtonPrimary'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'

const index = () => {

    const navigation = useRouter();

  return (
   

    <SafeAreaView>
    <View style={tw`h-full w-full bg-black pt-40`}>
      <Image source={require('@/assets/images/logo.png')} style={tw`h-10 w-70 mx-10 mb-30`}></Image>
      <Text style={tw`font-bold p-4 text-center text-white text-xl`}>Belajar Technology & Dapatkan Pengalamannya Belajar Technology</Text>
      <Text style={tw`px-10 pb-20 text-center text-white`}>Belajar di Techxperience ini kamu dapat belajar berbagai bidang teknologi seperti pemrograman, desain grafis, dan jaringan.</Text>
      <ButtonPrimary title='Mulai Belajar Sekarang' warnaBtn='transparent' border={true} borderColor='white' rute={() => navigation.navigate('/')} />
      <ButtonPrimary  title='Masuk' warnaBtn='[#4285f4]' rute={() => navigation.navigate('/auth/signin')} />
      
    </View>
    </SafeAreaView>
  )
}

export default index
