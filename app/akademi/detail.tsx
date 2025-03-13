import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import tw from 'twrnc';
import YoutubeIframe from 'react-native-youtube-iframe';
import ButtonPrimary from '@/components/ButtonPrimary';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Detail = () => {
  const navigation = useRouter();
  const [videoId, setVideoId] = useState("iMUQFL1ZcWw");

  const lessons = [
    { id: 1, title: "Lesson 1 - Identifying the Need: Market Research Essentials", video: "iMUQFL1ZcWw" },
    { id: 2, title: "Lesson 2 - Building a Solid Business Model Canvas", video: "Jwz8KmWx_0M" },
    { id: 3, title: "Lesson 3 - Attachment", video: "K4TOrB7at0Y" },
    { id: 4, title: "Lesson 4 - Quiz", video: "oHg5SJYRHA0" },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-black mt-10`}> 
      <ScrollView>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.back()} style={tw`absolute top-4 left-4 z-10 flex-row justify-center items-center`}> 
          <Ionicons size={24} color="white" name="arrow-back" />
          <Text style={tw`text-white ml-30 text-bold text-xl`}>Detail</Text>
        </TouchableOpacity>
        
        
        {/* Video Player */}
        <View style={tw`h-56 mt-10`}> 
          <YoutubeIframe height={200} play={true} videoId={videoId} />
        </View>

        {/* Course Details */}
        <View style={tw`p-4`}> 
          <Text style={tw`text-lg text-white font-bold`}>Mahir Menjadi Frontend Dev</Text>
          <Text style={tw`text-gray-400 mt-2`}>
            Bergabung dengan kelas mahir menjadi frontend dev, maka kamu sudah mendapatkan fundamental menjadi seorang programmer.
          </Text>
          <Text style={tw`text-yellow-400 mt-2`}>⭐ 4.5 (8234) | 4 Module | Programmer</Text>
        </View>

        {/* Module List */}
        <View style={tw`bg-gray-900 m-4 p-4 rounded-lg`}> 
          <Text style={tw`text-white font-bold`}>Module 1</Text>
          <Text style={tw`text-gray-400 mb-2`}>Fundamentals for Programmer - 30 minutes</Text>
          
          {/* Lessons */}
          <View style={tw`border-t border-gray-700 mt-2 pt-2`}> 
            {lessons.map((lesson) => (
              <TouchableOpacity key={lesson.id} onPress={() => setVideoId(lesson.video)}>
                <View style={tw`flex-row items-center py-2`}> 
                  <View style={tw`w-8 h-8 ${videoId === lesson.video ? 'bg-blue-500' : 'bg-gray-700'} rounded-full`} />
                  <Text style={tw`text-white ml-2`}>{lesson.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <ButtonPrimary title='Masuk' warnaBtn='[#4285f4]' rute={() => navigation.navigate('/home')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
