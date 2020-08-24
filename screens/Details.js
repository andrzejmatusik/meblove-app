import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Navbar from '../components/Navbar';
import { globalStyles } from '../styles/Global';

export default function Details({ navigation, route }) {
  const goBack = () => {
    navigation.goBack();
  };
  const { title, text, img, gallery } = route.params;
  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.spacing}>
        {/* navbar */}
        <Navbar onPress={goBack} />
        {/* header */}
        <View style={styles.header}>
          <Image
            style={styles.headerImg} 
            source={img}
          />
          <Text style={styles.headerText}>{title}</Text>
        </View>
        {/* details */}
        <View style={styles.details}>
          <View style={styles.detailsHeader}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.subtitleWrapper}>
              <Text style={styles.subtitle}>{gallery.length} pozycji</Text>
            </View>
            <Text>{text}</Text>
          </View>
          <View style={styles.detailsGallery}>
            <Text style={styles.galleryHeader}>
              Galeria
            </Text>
            {/* gallery */}
            <View style={styles.gallery}>
              {
                gallery.map((photo, index) => {
                  return (
                    <View style={styles.galleryImg} key={index}>
                      <Image
                        source={photo}
                      />
                      <Text style={styles.galleryText}>{index + 1}</Text>
                    </View>
                  );
                })
              }
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginHorizontal: -70,
    height: 300,
    overflow: 'hidden',
  },
  headerImg: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  headerText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    opacity: .5,
    position: 'absolute',
    top: 115,
  },
  details: {
    marginTop: 50,
  },
  detailsHeader: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitleWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subtitle: {
    borderWidth: 1,
    borderColor: '#ccd2db',
    borderRadius: 25,
    fontSize: 10,
    color: '#ccd2db',
    textAlign: 'center',
    marginVertical: 10,
    paddingVertical: 2.5,
    paddingHorizontal: 5,
  },
  detailsGallery: {
    borderTopWidth: 1,
    borderColor: '#ccd2db',
    paddingTop: 20,
  },
  galleryHeader: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: '-.75%',
    marginBottom: 10,
  },
  galleryImg: {
    margin: '.75%',
  },
  galleryText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    opacity: .5,
    position: 'absolute',
    top: 20,
    right: 0,
    left: 0,
  },
});