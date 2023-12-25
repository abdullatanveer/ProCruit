import React,{useState} from 'react'
import { 
  View, Text,TouchableOpacity, ActivityIndicator,FlatList } from 'react-native';

import {useRouter} from 'expo-router';
import styles from './popularjobs.style';
import {COLORS,SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hooks/useFetch';
 
const Popularjobs = () => {
  const router=useRouter();
   const {isloading,error,data}=useFetch(
    'search',{
    query:"React Developer",
    num_pages:1
    }
    );
    const [selectedJob,setSelectedJob]=useState();
    // console.log(data)
    const handleCardPress=(item)=>{
       router.push(`/job-details/${item.job_id}`)
       setSelectedJob(item.job_id)
    }
   

  return (
    <View style={styles.container}> 
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
      </TouchableOpacity>
       
      </View>
      <View style={styles.cardsContainer}>
           {isloading ? (
            <ActivityIndicator color={COLORS.primary} size="large" />
           ):error ? (
            <Text>Something went wrong</Text>
           ):(
            <FlatList
            data={data}
            renderItem={({item}) => (
              <PopularJobCard 
              item={item} 
              selectedJob={selectedJob}
              handleCardPress={()=>handleCardPress(item)}
              />
            )}
            keyExtractor={(item)=>item.job_id}
            contentContainerStyle={{columnGap:SIZES.small}}
            horizontal
             
             
            />
           )}
            
      </View>
    </View>
  )
}

export default Popularjobs