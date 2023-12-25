import React,{useState,useCallback} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    RefreshControl,
    ScrollView,

} from 'react-native';
import {useRouter,Stack,useGlobalSearchParams} from 'expo-router';
import {COLORS,icons,SIZES} from '../../constants';
import {Company,JobAbout,JobFooter,JobTabs,Screenheaderbtn,
Specifics} from '../../components';
import useFetch from '../../hooks/useFetch';


const  JobDetails = () => {
    const router = useRouter();
    const params=useGlobalSearchParams();

    const[data,isloading,error,refetch]=useFetch( 'job-details',{
        job_id:params.id,
    });
  return (
      <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
  <Stack.Screen>

  </Stack.Screen>

      </SafeAreaView>
  )
}

export default  JobDetails