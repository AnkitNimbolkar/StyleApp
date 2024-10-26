import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.HeadingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.HeaderText}>What's new in Javascript 21 - ES12</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year javascript is
            bringing 4 new features, which are almost in production rollout. I won't be wasting much
            more time and directly jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')
            }
          >
            <Text>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/__a.n.kit_')}>
            <Text style={styles.SocialLink}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.linkedin.com/in/ankitnimbolkar')}
          >
            <Text style={styles.SocialLink}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeadingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    color: '#000000',
    fontSize: 16,
	fontWeight: '600'
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
	padding: 10,
  },
  footerContainer: {
	padding: 8,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-evenly'
  },
  SocialLink: {
	fontSize: 14,
    color: '#4834DF',
	backgroundColor: '#fff',
	paddingHorizontal: 20,
	paddingVertical: 6,
	borderRadius: 6
  },
});
