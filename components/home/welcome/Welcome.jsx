import React from 'react'
import { View, Text } from 'react-native'

import styles from './welcome.style'

const Welcome = () => {
  return (
    <View> 
     <View style={styles.container}>
       <Text style={styles.userName}>Hello Abdullah</Text>
       <Text style={styles.welcomeMessage}>Find your perfect job</Text>
     </View>
     </View>
  )
}

export default Welcome