import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Ankit Nimbolkar',
      status: 'Making your gpay smooth',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D4D03AQGBdz1EMScfSA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694924475078?e=2147483647&v=beta&t=HWTNkVIE2vAnuJ9MCH7RvE8eSypafiLo37eVk8hNzVA',
    },
    {
      uid: 2,
      name: 'Deep Sanchan',
      status: 'Building secure Digital banks',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMoF4GLe7-PIsCIWL0UA6gQrq5eDwv3u-_w&s',
    },
    {
      uid: 3,
      name: 'Swati Rojha',
      status: 'Rider woman',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6oZieaVH5sOshdOVhqdHTPOpciLXO4Lj_g&s',
    },
    {
      uid: 4,
      name: 'Chandan Mishra',
      status: 'Owns a shop',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq94lG2zoOhKTA3Hgwy-QZBUxBAKfj24quWg&s',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    padding: 8,
    marginLeft: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    backgroundColor: '#82589F',
    padding: 8,
    borderRadius: 14
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14
  },
  userName: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 5,
    fontWeight: '600',
  },
  userStatus: {
    fontSize: 14,
    fontWeight: '400',
  },
});
