import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import AkademiCard from '@/components/AkademiCard';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const akademi = () => {
  const navigation = useRouter();
  const events = [
    {
      jenis: 'Keuangan Bisnis',
      title: 'Introduction of Financial Statement ',
      description: '4 Module',
      status: 'Free',
      image: { uri: 'https://www.smadwiwarna.sch.id/wp-content/uploads/2022/12/cara-belajar-agar-cepat-paham-dan-ingat.webp' },
      icon : 'star',
      number: '4,5 (1000)'    ,},
    {
      jenis: 'Keuangan Bisnis',
      title: 'Introduction of Venture Capital',
      description: '4 Module',
      status: 'Pro',
      image: { uri: 'https://www.smadwiwarna.sch.id/wp-content/uploads/2022/12/cara-belajar-agar-cepat-paham-dan-ingat.webp' },
      icon : 'star',
      number: '4,5 (1000)'    ,
    },
    {
      jenis: 'Keuangan Bisnis',
      title: 'Importance of Branding',
      description: '4 Module',
      status: 'Free',
      image: { uri: 'https://www.smadwiwarna.sch.id/wp-content/uploads/2022/12/cara-belajar-agar-cepat-paham-dan-ingat.webp' },
      icon : 'star',
      number: '4,5 (1000)'    ,
    },
    {
      jenis: 'Keuangan Bisnis',
      title: 'Analisa Teknikal Saham',
      description: '4 Module',
      status: 'Pro',
      image: { uri: 'https://www.smadwiwarna.sch.id/wp-content/uploads/2022/12/cara-belajar-agar-cepat-paham-dan-ingat.webp' },
      icon : 'star',
      number: '4,5 (1000)'    ,
    },
    {
      jenis: 'Keuangan Bisnis',
      title: 'Introduction of Financial Statement ',
      description: '4 Module',
      status: 'Free',
      image: { uri: 'https://www.smadwiwarna.sch.id/wp-content/uploads/2022/12/cara-belajar-agar-cepat-paham-dan-ingat.webp' },
      icon : 'star',
      number: '4,5 (1000)'    ,},
    {
      jenis: 'Keuangan Bisnis',
      title: 'Introduction of Venture Capital',
      description: '4 Module',
      status: 'Free',
      image: { uri: 'https://www.smadwiwarna.sch.id/wp-content/uploads/2022/12/cara-belajar-agar-cepat-paham-dan-ingat.webp' },
      icon : 'star',
      number: '4,5 (1000)'    ,
    },
    {
      jenis: 'Keuangan Bisnis',
      title: 'Importance of Branding',
      description: '4 Module',
      status: 'Free',
      image: { uri: 'https://www.smadwiwarna.sch.id/wp-content/uploads/2022/12/cara-belajar-agar-cepat-paham-dan-ingat.webp' },
      icon : 'star',
      number: '4,5 (1000)'    ,
    },
    {
      jenis: 'Keuangan Bisnis',
      title: 'Analisa Teknikal Saham',
      description: '4 Module',
      status: 'pro',
      image: { uri: 'https://www.smadwiwarna.sch.id/wp-content/uploads/2022/12/cara-belajar-agar-cepat-paham-dan-ingat.webp' },
      icon : 'star',
      number: '4,5 (1000)'    ,
    },
  ];


  return (
    <SafeAreaView style={tw`h-full w-full bg-black`}>
      <ScrollView>
        <View style={tw`pt-10`}>
          <View style={tw`flex-row px-4 mb-2`}>
          <FontAwesome name="book" size={33} color="white" style={tw`px-2`}/>
          <Text style={tw`text-white text-3xl font-bold mx-2 mb-2`}>Akademi</Text>
          </View>
          <View style={tw`mr-4`}>
                  {events.map((event, index) => (
                    <AkademiCard 
                      key={index} 
                      jenis={event.jenis}
                      title={event.title} 
                      description={event.description} 
                      image={event.image}
                      status={event.status}
                      icon={event.icon}
                      number={event.number}
                      rute={() => navigation.navigate('/akademi/detail')} 
                    />
                  ))}
        </View>
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default akademi