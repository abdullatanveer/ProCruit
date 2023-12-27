import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import generateStyles from './tabs.style';
import styles from './tabs.style'
import { SIZES } from '../../../constants';

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
  const styles = generateStyles(name, activeTab);

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  );
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={setActiveTab}
          />
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{columnGap:5}}
      />
    </View>
  );
};

export default Tabs;
