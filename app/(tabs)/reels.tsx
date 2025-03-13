import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, FlatList, Dimensions, TextInput } from 'react-native';
import { Video } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

const videoData = [
  { id: '1', source: require('@/assets/video/contoh.mp4'), title: 'Mahir Menjadi Frontend Dev' },
  { id: '2', source: require('@/assets/video/contoh.mp4'), title: 'Belajar UI/UX dari Nol' },
  { id: '3', source: require('@/assets/video/contoh.mp4'), title: 'React Native Dasar' },
];

const Reels = () => {
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});
  const videoRefs = useRef({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id) => {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const togglePlayPause = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.getStatusAsync().then((status) => {
        if (status.isPlaying) {
          video.pauseAsync();
        } else {
          video.playAsync();
        }
      });
    }
  };

  return (
    <FlatList
      data={videoData}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={[tw`h-full w-full justify-center items-center`, { height: Dimensions.get('window').height }]}> 
          {/* Video Player */}
          <TouchableOpacity onPress={() => togglePlayPause(item.id)} style={tw`w-full h-full`} activeOpacity={1}>
            <Video
              ref={(ref) => (videoRefs.current[item.id] = ref)}
              source={item.source}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={tw`w-full h-full`}
            />
          </TouchableOpacity>
          
          {/* Search Bar */}
          <View style={tw`absolute top-10 left-4 right-4 bg-gray-900 bg-opacity-50 p-1 rounded-lg flex-row items-center`}> 
           
            <TextInput 
              placeholder="For Your Page..." 
              placeholderTextColor="white"
              style={tw`text-white flex-1`}
            />
            <FontAwesome name="search" size={20} color="gray" style={tw`mr-2`} />
          </View>
          
          {/* Video Title */}
          <View style={tw`absolute bottom-12 left-4`}> 
            <Text style={tw`text-white text-lg font-bold`}>{item.title}</Text>
            <Text style={tw`text-white font-bold`}>Mendapatkan sertifikat dan keuntungan lainnya</Text>
          </View>

          {/* Action Icons */}
          <View style={tw`absolute bottom-24 right-4 items-center`}> 
            <TouchableOpacity style={tw`mb-4 items-center`} onPress={() => toggleLike(item.id)}>
              <FontAwesome name={liked[item.id] ? "heart" : "heart-o"} size={32} color={liked[item.id] ? "red" : "white"} />
              <Text style={tw`text-white text-sm`}>{liked[item.id] ? '121' : '120'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`mb-4 items-center`}>
              <FontAwesome name="comment" size={32} color="white" />
              <Text style={tw`text-white text-sm`}>30</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`mb-4 items-center`}>
              <FontAwesome name="share" size={32} color="white" />
              <Text style={tw`text-white text-sm`}>15</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`items-center`} onPress={() => toggleSave(item.id)}>
              <FontAwesome name={saved[item.id] ? "bookmark" : "bookmark-o"} size={32} color={saved[item.id] ? "yellow" : "white"} />
              <Text style={tw`text-white text-sm`}>{saved[item.id] ? 'Saved' : 'Save'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default Reels;
