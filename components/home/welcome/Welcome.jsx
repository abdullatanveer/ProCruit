import React,{useState}from 'react'
import { View, Text ,TextInput, TouchableOpacity,Image,FlatList} from 'react-native';
import { icons,SIZES } from '../../../constants';
import {useRouter} from 'expo-router';

import styles from './welcome.style'

 
const jobTypes = ['Full Time','Part Time','Freelance','Internship']
const Welcome = () => {
  const router=useRouter();
  const[activeJobType,setActiveJobType]=useState('Full Time');
  return (
    <View> 
     <View style={styles.container}>
       <Text style={styles.userName}>Hello Abdullah</Text>
       <Text style={styles.welcomeMessage}>Find your perfect job</Text>
        
     </View>
     <View style={ styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput}
          placeholder="Search for job"
          value=''
          onChange={(text) => console.log(text)}

          />

        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
          source={icons.search}
          style={styles.searchBtnImage}
          reziseMode="contain"
          />
        
          </TouchableOpacity>
       </View>
       <View style={styles.tabsContainer}>
        <FlatList
        data={jobTypes}
        renderItem={({item}) => (
          <TouchableOpacity 
          style={styles.tab(activeJobType,item)}
          onPress={() => {setActiveJobType(item);
            router.push(`/search/${item}`);
          }}
          >
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
             
          </TouchableOpacity>
           
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{columnGap: SIZES.small}}
        horizontal
        />
       </View>
     </View>
  )
}

export default Welcome