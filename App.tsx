import { 
  View, 
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView
  } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import ElevatedCards from './Components/ElevatedCards'
import FancyCard from './Components/FancyCard'
import ActionCard from './Components/ActionCard'
import ContactList from './Components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Container}>
          <Text style={styles.Title}>HOME</Text>
        </View>
        <View>
          <FlatCards/>
          <ElevatedCards/>
          <FancyCard/>
          <ActionCard/>
          <ContactList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container:{
    alignItems: 'center',
    marginTop: 12
  },
  Title:{
    fontSize: 20,
    fontWeight: '900',
    color: '#ffffff'
  }
})


export default App