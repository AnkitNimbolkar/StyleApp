import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <SafeAreaView>
        <View>
            <Text style={styles.HeadingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.Container}>
                <View style={[styles.Card,styles.ElevatedCard]}>
                    <Text>Slide </Text>
                </View>
                <View style={[styles.Card,styles.ElevatedCard]}>
                    <Text>👉</Text>
                </View>
                <View style={[styles.Card,styles.ElevatedCard]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.Card,styles.ElevatedCard]}>
                    <Text>see</Text>
                </View>
                <View style={[styles.Card,styles.ElevatedCard]}>
                    <Text>more</Text>
                </View>
                <View style={[styles.Card,styles.ElevatedCard]}>
                    <Text>tiless..</Text>
                </View>
                <View style={[styles.Card,styles.ElevatedCard]}>
                    <Text>😊</Text>
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    HeadingText:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        paddingTop: 15
    },

    Container: {
        flex: 1,
        padding:10
        
    },

    Card:{
        flex: 1,
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'

    },

    ElevatedCard: {
        backgroundColor: '#758AA2',
        elevation: 10,
        
    }
})