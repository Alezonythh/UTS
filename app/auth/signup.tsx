import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import ButtonPrimary from '@/components/ButtonPrimary';
import ButtonSosmed from '@/components/ButtonSosmed';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Signup = () => {
  const navigation = useRouter();
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView>
      <View style={tw`h-full w-full bg-black pt-5 px-4`}>
      <Image source={require('@/assets/images/logo.png')} style={tw`h-10 w-40 mb-5`}></Image>

        <TextInput
          style={tw`p-4 border-2 rounded-lg text-center mb-4 border-white text-white`}
          placeholder="Masukkan nama lengkap"
          placeholderTextColor={'#fff'}
        />
          <TextInput
          style={tw`p-4 border-2 rounded-lg text-center mb-4 border-white text-white`}
          placeholder="Masukkan email"
          keyboardType="email-address"
          placeholderTextColor={'#fff'}
        />
        <View style={tw`relative mb-4`}>
          <TextInput
            style={tw`p-4 border-2 rounded-lg text-center border-white text-white`}
            placeholder="Masukkan password"
            secureTextEntry={!passwordVisible}
            placeholderTextColor={'#fff'}
          />
          <TouchableOpacity
            style={tw`absolute right-4 top-4`}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={tw`relative mb-4`}>
          <TextInput
            style={tw`p-4 border-2 rounded-lg text-center border-white text-white`}
            placeholder="Konfirmasi password"
            secureTextEntry={!passwordVisible}
            placeholderTextColor={'#fff'}
          />
          <TouchableOpacity
            style={tw`absolute right-4 top-4`}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>


        <View style={tw`flex-row justify-between items-center mb-4`}>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={tw`flex-row items-center`}>
            <Ionicons 
              name={rememberMe ? 'checkbox' : 'square-outline'} 
              size={24} 
              color="white" 
            />
            <Text style={tw`text-white ml-2`}>Ingatkan saya</Text>
          </TouchableOpacity>
          <Text style={tw`text-sm text-blue-500 underline`}>Lupa Password?</Text>
        </View>
      
        <ButtonPrimary title='Masuk' warnaBtn='[#4285f4]' rute={() => navigation.navigate('/auth/survei')} />

        <View style={tw`flex-row justify-center mt-2 gap-1 pb-4`}>
          <Text style={tw`text-sm text-center text-white`}>Lah udah punya akun?</Text>
          <Text style={tw`text-sm text-center underline text-blue-500`} onPress={() => navigation.push("/auth/signin")}>Masuk Aja!</Text>
        </View>
        <Text style={tw`font-bold p-4 text-center text-white border-b-2 border-white mb-5`}>Atau mau masuk melalui?</Text>
        <View style={tw`justify-center gap-2 `}>
          <ButtonSosmed icon="logo-google" text="Masuk Dengan Google"/>
          <ButtonSosmed icon="logo-facebook"  text="Masuk dengan Facebook"/>
        </View>
      
      </View>
    </SafeAreaView>
  );
};

export default Signup;
