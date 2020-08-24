import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/Navbar';
import { globalStyles } from '../styles/Global';
import TabNavigator from '../navigators/Tab';

export default function Browse({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.spacing}>
        {/* navbar */}
        <Navbar onPress={goBack} />
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Menu
          </Text>
        </View>
        <TabNavigator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});