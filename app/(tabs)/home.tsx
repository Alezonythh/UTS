import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Menu from '@/components/Menu';
import EventCard from '@/components/EventCard';
import IconNav from '@/components/IconNav';
import ButtonEvent from '@/components/ButtonEvent';
import ImageEvent from '@/components/ImageEvent';


const HomeScreen = () => {
  const [showNotification, setShowNotification] = useState(true);

  // Menu Items
  const menuItems = [
    { icon: 'school', label: 'Modul Akademi', buttonColor: '#1F2937', textColor: 'white' },
    { icon: 'people', label: 'Community', buttonColor: '#1F2937', textColor: 'white' },
    { icon: 'calendar', label: 'Event Live', buttonColor: '#1F2937', textColor: 'white' },
    { icon: 'chatbox', label: 'Grup Diskusi', buttonColor: '#1F2937', textColor: 'white' },
  ];


const menuItemss = [
  { icon: '🏠', title: 'Techxperience Career' },
  { icon: '👤', title: 'Pengembangan Usaha' },
  { icon: '⚙️', title: 'Beasiswa Kuliah' },
  { icon: '🔔', title: 'Techxperience Roadmap' },

];

const buttonItems = [
  { title: 'Event 1', rute: () => console.log('Event 1') },
  { title: 'Event 2', rute: () => console.log('Event 2') },
  { title: 'Event 3', rute: () => console.log('Event 3') },
  { title: 'Event 4', rute: () => console.log('Event 4') },
  { title: 'Event 5', rute: () => console.log('Event 5') },
  { title: 'Event 6', rute: () => console.log('Event 6') },
  { title: 'Event 7', rute: () => console.log('Event 7') },
  { title: 'Event 8', rute: () => console.log('Event 8') }
];
 const imageItems = [
  {

    image: { uri: 'https://i.ytimg.com/vi/kWJ-0Som4DI/hqdefault.jpg' },

  },
  {

    image: { uri: 'https://i.ytimg.com/vi/kWJ-0Som4DI/hqdefault.jpg' },

  },
  {

    image: { uri: 'https://i.ytimg.com/vi/kWJ-0Som4DI/hqdefault.jpg' },

  },
  {

    image: { uri: 'https://i.ytimg.com/vi/kWJ-0Som4DI/hqdefault.jpg' },

  },
 ]

  // Event Items
  const events = [
    {
      title: 'Road to Masterclass with Timothy Ronald',
      description: 'Belajar investasi saham dari pakarnya.',
      image: { uri: 'https://i.ytimg.com/vi/kWJ-0Som4DI/hqdefault.jpg' },
      icon : 'play-circle'
    },
    {
      title: 'PastiPahamInvestasi - Pilihan Saham ESG',
      description: 'Mengenal saham ESG yang potensial di masa depan.',
      image: { uri: 'https://i.ytimg.com/vi/kWJ-0Som4DI/hqdefault.jpg' },
      icon : 'play-circle'
    },
    {

      title: 'Workshop Crypto Fundamental',
      description: 'Mengenal dasar-dasar investasi Crypto.',
      image: { uri: 'https://i.ytimg.com/vi/kWJ-0Som4DI/hqdefault.jpg' },
      icon : 'play-circle'
    },
    {

      title: 'Analisa Teknikal Saham',
      description: 'Pelajari teknik membaca chart saham.',
      image: { uri: 'https://i.ytimg.com/vi/kWJ-0Som4DI/hqdefault.jpg' },
      icon : 'play-circle'
    },
  ];

  return (
    <SafeAreaView style={tw`h-full w-full bg-black`}>
      <ScrollView>
        <View style={tw`pt-6`}>

          {/* Header */}
          <View style={tw`flex-row justify-between items-center px-4`}>
          <Image source={require('@/assets/images/logo.png')} style={tw`h-10 w-40 `}></Image>
            <TouchableOpacity style={tw`flex-row items-center`}>
              <Ionicons name="search" size={30} color="white" />
              <Ionicons name="notifications" size={30} color="white" />
              <Ionicons name="person-circle" size={30} color="white" />
            </TouchableOpacity>
          </View>

          {/* Notifikasi
          {showNotification && (
            <View style={tw`bg-gray-800 p-3 mt-3 mx-4 rounded-lg flex-row items-center justify-between`}>
              <View style={tw`flex-row items-center`}>
                <Ionicons name="notifications" size={20} color="white" />
                <Text style={tw`text-white ml-2 text-sm`}>
                  Nikmati insight, berita dan update terkini,{' '}
                  <Text style={tw`text-green-400 font-bold`}>nyalakan notifikasi</Text>
                </Text>
              </View>
              <TouchableOpacity onPress={() => setShowNotification(false)}>
                <Ionicons name="close" size={20} color="white" />
              </TouchableOpacity>
            </View>
          )} */}

          {/* Banner */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-4 px-4`}>
            <Image source={require('@/assets/images/bg.png')} style={tw`w-80 h-40 rounded-lg mr-3`} />
            <Image source={require('@/assets/images/bg.png')} style={tw`w-80 h-40 rounded-lg`} />
          </ScrollView>

          {/* Menu */}
          <FlatList
            data={menuItems}
            renderItem={({ item }) => (
              <View style={tw`flex-1 m-1`}>
                <Menu icon={item.icon} title={item.label} buttonColor={item.buttonColor} textColor={item.textColor} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            contentContainerStyle={tw`mt-4 px-4`}
          />

          {/* Tes Finansial
          <TouchableOpacity style={tw`bg-gray-800 p-4 mx-4 mt-4 rounded-lg flex-row items-center justify-between`}>
            <View>
              <Text style={tw`text-white font-bold text-sm`}>Yuk, Ikuti <Text style={tw`text-green-400`}>Tes Finansial</Text>!</Text>
              <Text style={tw`text-gray-400 text-xs mt-1`}>Dapatkan saran & rekomendasi belajarmu</Text>
            </View>
            <Ionicons name="arrow-forward-circle" size={24} color="white" />
          </TouchableOpacity> */}

         {/* Live Event */}
          <View style={tw`mt-6 px-4`}>
            <View style={tw`flex-row justify-between items-center`}>
              <View style={tw`flex-row `}>
                <FontAwesome name="book" size={20} color="white" style={tw`px-2`}/>
                <Text style={tw`text-white mb-2`}>Mau belajar apa ni</Text>
              </View>
              <Text style={tw`text-neutral-100 text-xs px-2 mb-2`}>Lihat semua</Text>
            </View>
           
           
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={tw`flex-row`}>
                {/* Group pertama (2 Card ke bawah) */}
                <View style={tw`mr-4`}>
                  {events.slice(0, 2).map((event, index) => (
                    <EventCard 
                      key={index} 
                      title={event.title} 
                      description={event.description} 
                      image={event.image} 
                      icon={event.icon}
                    />
                  ))}
                </View>
                
                {/* Group kedua (2 Card ke bawah) */}
                <View style={tw`mr-4 mb-4`}>
                  {events.slice(2, 4).map((event, index) => (
                    <EventCard 
                      key={index} 
                      title={event.title} 
                      description={event.description} 
                      image={event.image} 
                      icon={event.icon}
                    />
                  ))}
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={tw`flex-row justify-between items mx-4`}>
              <View style={tw`flex-row `}>
                <FontAwesome name="calendar" size={20} color="white" style={tw`px-2`}/>
                <Text style={tw`text-white mb-2`}>Ikuti Event Terdekat</Text>
              </View>
              <Text style={tw`text-neutral-100 text-xs px-2 mb-2`}>Lihat semua</Text>
            </View>

        <View style={tw`p-2`}>
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
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={tw`flex-row`}>
                {/* Group pertama (2 Card ke bawah) */}
                <View style={tw`mr-4`}>
                  {events.slice(0, 2).map((event, index) => (
                    <ImageEvent 
      
                      image={event.image} 

                    />
                  ))}
                </View>
                
                {/* Group kedua (2 Card ke bawah) */}
                <View style={tw`mr-4 mb-4`}>
                  {events.slice(2, 4).map((event, index) => (
                    <ImageEvent 

                      image={event.image} 
    
                    />
                  ))}
                </View>
              </View>
            </ScrollView>

            <View style={tw`flex-row justify-between items mx-4`}>
              <View style={tw`flex-row `}>
                <FontAwesome name="calendar" size={20} color="white" style={tw`px-2`}/>
                <Text style={tw`text-white mb-2`}>Program Techxperience</Text>
              </View>
              <Text style={tw`text-neutral-100 text-xs px-2 mb-2`}>Lihat semua</Text>
            </View>
            <View style={tw`flex-row justify-between items mx-2 gap-2`}>  
            {menuItemss.map((item, index) => (
              <View key={index} style={tw`items-center`}>
                <IconNav icon={item.icon} title={item.title} />
              </View>
            ))}
            </View>



        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
