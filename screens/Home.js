import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GoldenButton, WhiteButton } from '../components/CustomButtons';
import { globalStyles } from '../styles/Global';

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.centered}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Twoje miejsce.
            {"\b"}
            <Text style={styles.span}>Meblove.</Text>
            {"\n"}
            <Text style={styles.small}>Z miłości do designu.</Text>
          </Text>
        </View>
        {/* image */}
        <View style={styles.image}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
          />
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <GoldenButton text='Logowanie' onPress={() => navigation.navigate('Login')} />
          <WhiteButton text='Ustawienia' onPress={() => navigation.navigate('Settings')} />
          <Text style={styles.footerText}>
            Kodowanie: Andrzej Matusik.
            {/* W projekcie użyto fotografii pobranych ze strony WWW.FREEPIK.COM. Ich autorami są: RAWPIXEL (ikony), LESYASKRIPAK (wektory), VANITJAN, FREEPIK, HALAYALEX (zdjęcia). Aplikacja zakodowana została w oparciu o projekt graficzny autorstwa PAOLO SPAZZINI. */}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 5,
    marginBottom: 25,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  span: {
    color: '#c9a586',
  },
  small: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#ccd2db',
    lineHeight: 30,
  },
  image: {
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    resizeMode: 'contain',
    width: 375,
    height: 375,
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#ccd2db',
  },
});