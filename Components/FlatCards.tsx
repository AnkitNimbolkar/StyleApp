import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <SafeAreaView>
        <View>
            <Text style={ styles.HeadingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
            </View>
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

    container:{
        flex:1,
        flexDirection: 'row',
        padding: 10
    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 10

    },

    cardOne:{
        backgroundColor: '#E44236',
        
    },
    cardTwo:{
        backgroundColor: '#2ecc72',
        
    },
    cardThree:{
        backgroundColor: '#3498DB',
        
    }



})