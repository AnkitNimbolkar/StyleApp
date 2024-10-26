import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.HeadingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
          <Image source={{
            uri: 'https://jaipurtourism.co.in/images/places-to-visit/header/sheesh-mahal-jaipur-entry-fee-timings-holidays-reviews-header.jpg'
          }}
          style={styles.ImageCard}          
          />
          <View style={styles.CardBody}>
              <Text style={styles.cardTitle}>Sheesh Mahal</Text>
              <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
              <Text style={styles.cardDescription}>Sheesh Mahal is also known as the Mirror Palace. Gorgeous precious stones and glass, beautifully hand-crafted paintings make Sheesh Mahal a wonder.It is the most well-known and attractive feature of Amer Fort, constructed by Maharaja Man Singh in the 16th century. However, by 1727 AD, the construction had come to an end.</Text>
              <Text style={styles.cardFooter}>12 mins Away</Text>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  HeadingText:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingTop: 15
  },

  card:{
    height: 470,
    width: 390,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16

  },

  elevatedCard :{
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      height:1,
      width:1
    }

  },

  ImageCard:{
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,

  },

  CardBody : {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },

  cardTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6
    
  },

  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 4
  },

  cardDescription: {
    color: '#242B2E',
    fontSize: 13,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1
  },

  cardFooter: {
    flex: 1,
    color: '#000000',
    fontSize: 17,
  }
})