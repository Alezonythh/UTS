import { View, Text, ScrollView, SafeAreaView, FlatList, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';

import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import NewsCard from '@/components/NewsCard';
import ButtonEvent from '@/components/ButtonEvent';
import NewsCard2 from '@/components/NewsCard2';

const News = () => {
  const navigation = useRouter();
  const events = [
    {
      title: 'Road to Masterclass with Timothy Ronald',
      description: 'Belajar investasi saham dari pakarnya.',
      image: { uri: 'https://i.ytimg.com/vi/kWJ-0Som4DI/hqdefault.jpg' },
      tanggal: '23 February 2022',
    },
    {
      title: 'PastiPahamInvestasi - Pilihan Saham ESG',
      description: 'Mengenal saham ESG yang potensial di masa depan.',
      image: { uri: 'https://i.ytimg.com/vi/kWJ-0Som4DI/hqdefault.jpg' },
      tanggal: '23 February 2022',
    },
    {
      title: 'Workshop Crypto Fundamental',
      description: 'Mengenal dasar-dasar investasi Crypto.',
      image: { uri: 'https://i.ytimg.com/vi/kWJ-0Som4DI/hqdefault.jpg' },
      tanggal: '23 February 2022',
    },
    {
      title: 'Analisa Teknikal Saham',
      description: 'Pelajari teknik membaca chart saham.',
      image: { uri: 'https://i.ytimg.com/vi/kWJ-0Som4DI/hqdefault.jpg' },
      tanggal: '23 February 2022',
    },
  ];
  const buttonItems = [
    { title: 'Design web', rute: () => console.log('Event 1') },
    { title: 'Technologies', rute: () => console.log('Event 2') },
    { title: 'Goverment', rute: () => console.log('Event 3') },
    { title: 'Workshop', rute: () => console.log('Event 4') },
    { title: 'Event 5', rute: () => console.log('Event 5') },
    { title: 'Event 6', rute: () => console.log('Event 6') },
    { title: 'Event 7', rute: () => console.log('Event 7') },
    { title: 'Event 8', rute: () => console.log('Event 8') }
  ];
  const eventss = [
    {
      jenis: '23 Februari 2025',
      title: 'Introduction of Financial Statement Introduction of Financial   ',
      image: { uri: 'https://www.smadwiwarna.sch.id/wp-content/uploads/2022/12/cara-belajar-agar-cepat-paham-dan-ingat.webp' },
  },
  {
    jenis: '23 Februari 2025',
    title: 'Introduction of Financial Statement Introduction of Financial ',
    image: { uri: 'https://www.smadwiwarna.sch.id/wp-content/uploads/2022/12/cara-belajar-agar-cepat-paham-dan-ingat.webp' },
},
{
  jenis: '23 Februari 2025',
  title: 'Introduction of Financial Statement Introduction of Financial  ',
  image: { uri: 'https://www.smadwiwarna.sch.id/wp-content/uploads/2022/12/cara-belajar-agar-cepat-paham-dan-ingat.webp' },
},
{
  jenis: '23 Februari 2025',
  title: 'Introduction of Financial Statement Introduction of Financial',
  image: { uri: 'https://www.smadwiwarna.sch.id/wp-content/uploads/2022/12/cara-belajar-agar-cepat-paham-dan-ingat.webp' },
},
  ];

  return (
    <SafeAreaView style={tw`h-full w-full bg-black`}> 
      <ScrollView>
        <View style={tw`pt-10 px-4`}> 
          {/* Header */}
          <View style={tw`flex-row items-center mb-4`}> 
            <Text style={tw`text-white text-3xl font-bold mx-2`}>News</Text>
          </View>

          {/* Search Bar (Diperbaiki) */}
          <View style={tw`border-2 border-white bg-gray-900 bg-opacity-50 p-2 rounded-lg flex-row items-center mt-4 mb-4`}> 
            <TextInput 
              placeholder="Mau cari berita apa hari ini?" 
              placeholderTextColor="white"
              style={tw`text-white flex-1 p-2`}
            />
            <FontAwesome name="search" size={20} color="gray" style={tw`mr-2`} />
          </View>
          
          {/* Horizontal List */}
          <FlatList
            data={events}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`px-2`}
            renderItem={({ item }) => (
              <View style={tw`mr-4`}>
                <NewsCard
                  title={item.title}
                  image={item.image}
                  tanggal={item.tanggal}
                />
              </View>
            )}
          />
          <View style={tw`p-2 pt-8`}> 
            <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
              <View style={tw`flex-row`}>  
                {buttonItems.map((item, index) => (
                  <ButtonEvent   
                    key={index} 
                    title={item.title} 
                    rute={item.rute} 
                  />
                ))}
              </View>
            </ScrollView>
          </View>
          
          <View style={tw`mr-4`}> 
            {eventss.map((events, index) => (
              <NewsCard2
                key={index} 
                jenis={events.jenis}
                title={events.title} 
                image={events.image}
                rute={() => navigation.navigate('/akademi/detail')} 
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default News;
