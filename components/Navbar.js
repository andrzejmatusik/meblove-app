import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

export default function Navbar({ onPress }) {
  return (
      <View style={styles.navbar}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../assets/images/arrow.png')}
          />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    marginTop: 50,
    marginBottom: 35,
  },
});