import BenefitsMemberhip from '@/components/BenefitsMemberhip';
import ButtonPrimary from '@/components/ButtonPrimary';
import Membership from '@/components/Membership';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';



const membership = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const navigation = useRouter();
  const DataBenefits = [
    { image: require('@/assets/images/icon1.png'), text: 'Akses ke semua modul pembelajaran' },
    { image: require('@/assets/images/icon1.png'), text: 'Jalur pembelajaran yang dirancang oleh mentor' },
    { image: require('@/assets/images/icon1.png'), text: 'Mentoring sebulan 4x pertemuan' },
    { image: require('@/assets/images/icon1.png'), text: 'Mendapatkan sertifikat dan keuntungan lainnya' },
  ];
  const DataMembership = [
    { id: 1, harga: 'Rp 500.000,00', jangka: '12 Bulan', bayaran: 'Rp 12.475,00 / minggu' },
    { id: 2, harga: 'Rp 260.000,00', jangka: '4 Bulan', bayaran: 'Rp 16.250,00 / minggu' },
    { id: 3, harga: 'Rp 85.000,00', jangka: '1 Bulan', bayaran: 'Rp 21.250,00 / minggu' },
  ];

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={tw`flex-1 mt-2`}>

        <View style={tw`mb-5 absolute top-0 left-0 right-0 mt-7 items-center`}>
          <Text style={tw`absolute top-0 right-5 font-bold text-xl text-white`}>X</Text>
          <Text style={tw`font-bold text-xl text-center mt-8 text-white`}>
            Start Your 7-Free Trial Today!
          </Text>
          <Text style={tw`text-center text-white`}>
            Buka Fitur Eksklusif dengan TechXPerience Membership
          </Text>
        </View>

        <ScrollView contentContainerStyle={tw`pt-22`} showsVerticalScrollIndicator={false}>
        <View style={tw`bg-[#d8d8d8] rounded-t-3xl h-full p-5 mt-5`}>
          <Text style={tw`font-bold text-xl text-center`}>Kamu Akan Mendapatkan:</Text>
          <View style={tw`flex-col gap-5 mt-5`}>
            {DataBenefits.map((item, index) => (
              <BenefitsMemberhip key={index} image={item.image} text={item.text} />
            ))}
          </View>

          <View style={tw`flex-col mt-5`}>
            {DataMembership.map((item, index) => (
              <Membership key={item.id} harga={item.harga} jangka={item.jangka} bayaran={item.bayaran} selected={selectedOption === item.id} onPress={() => setSelectedOption(item.id)} />
            ))}
          </View>

          <View style={tw`mt-5`}>
          <ButtonPrimary  title='Masuk' warnaBtn='[#4285f4]' rute={() => navigation.navigate('/home')} />

            <View style={tw`flex-row justify-evenly mt-1`}>
              <TouchableOpacity>
                <Text style={tw`text-gray-500`}>Terms & Condition</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={tw`text-gray-500`}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default membership;