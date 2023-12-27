import React, { useState, useCallback } from "react";
import {
  Text,
  View,
  SafeAreaView,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useRouter, Stack, useLocalSearchParams } from "expo-router";
import { COLORS, icons, SIZES } from "../../constants";
import {
  Company,
  JobAbout,
  JobFooter,
   
  ScreenHeaderBtn,
  Screenheaderbtn,
  Specifics,
  JobTabs,
} from "../../components";
import useFetch from "../../hooks/useFetch";

const tabs = ["About", "Qualifications", "Resposnsibilities"];
// console.log(tabs);

const JobDetails = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const { data, isloading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const onRefresh = () => {};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerTitle: "",
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              handlePress={() => router.back()}
              dimension="60%"
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isloading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                Location={data[0].job_country}
              />

              <JobTabs
               tabs={tabs}
               activeTab={activeTab}
               setActiveTab={setActiveTab}
                 
              />
               
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
