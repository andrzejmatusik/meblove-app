import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, Switch } from 'react-native';
import Navbar from '../components/Navbar';
import Slider from '@react-native-community/slider';
import { globalStyles } from '../styles/Global';

export default function Settings({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };
  const [notifications, setNotifications] = useState(false);
  const toggleNotifications = () => {
    setNotifications(previousState => !previousState);
  };
  const [newsletter, setNewsletter] = useState(false);
  const toggleNewsletter = () => {
    setNewsletter(previousState => !previousState);
  };
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.spacing}>
        {/* navbar */}
        <Navbar onPress={goBack} />
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Ustawienia
          </Text>
          <Image
            style={styles.avatar}
            source={require('../assets/images/avatar.png')}
          />
        </View>
        {/* info */}
        <View style={styles.info}>
          <Text style={styles.settingsText}>Użytkownik</Text>
          <View style={styles.textRow}>
            <Text>Andrzej</Text>
            <Text style={styles.editText} onPress={() => Alert.alert("Ups!", "Funkcja chwilowo nieczyna.")}>Edytuj</Text>
          </View>
          <Text style={styles.settingsText}>E-mail</Text>
          <View style={styles.textRow}>
            <Text>andrzej.matusik@gmail.com</Text>
            <Text style={styles.editText} onPress={() => Alert.alert("Ups!", "Funkcja chwilowo nieczyna.")}>Edytuj</Text>
          </View>
        </View>
        {/* ranges */}
        <View style={styles.ranges}>
          <Text style={styles.settingsText}>Budżet</Text>
          <Slider
            style={{
              marginHorizontal: -15,
              marginBottom: 7.5,
            }}
            value={5}
            minimumValue={0}
            maximumValue={10}
            step={1}
            minimumTrackTintColor="#c9a586"
            maximumTrackTintColor="#ccd2db"
            thumbTintColor="#c9a586"
          />
          <Text style={styles.settingsText}>Limit</Text>
          <Slider
            style={{
              marginHorizontal: -15,
              marginBottom: 7.5,
            }}
            value={5}
            minimumValue={0}
            maximumValue={10}
            step={1}
            minimumTrackTintColor="#c9a586"
            maximumTrackTintColor="#ccd2db"
            thumbTintColor="#c9a586"
          />
        </View>
        {/* switches */}
        <View style={styles.switches}>
          <View style={styles.switchesRow}>
            <Text style={styles.switchesText}>Powiadomienia</Text>
            <Switch
              value={notifications}
              trackColor={{
                true: "#c9a586",
                false: "#ccd2db",
              }}
              thumbColor={notifications ? "#c9a586" : "#ccd2db"}
              onValueChange={toggleNotifications}
            />
          </View>
          <View style={styles.switchesRow}>
            <Text style={styles.switchesText}>Newsletter</Text>
            <Switch
              value={newsletter}
              trackColor={{
                true: "#c9a586",
                false: "#ccd2db",
              }}
              thumbColor={newsletter ? "#c9a586" : "#ccd2db"}
              onValueChange={toggleNewsletter}
            />
          </View>
        </View>
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
  avatar: {
    position: 'absolute',
    top: -7.5,
    right: 0,
    width: 50,
    height: 50,
  },
  textRow: {
    flexDirection: 'row',
  },
  settingsText: {
    color: '#ccd2db',
    marginTop: 10,
    marginBottom: 7.5,
  },
  editText: {
    flex: 1,
    fontWeight: 'bold',
    color: '#c9a586',
    textAlign: 'right',
  },
  info: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccd2db',
    paddingBottom: 30,
  },
  ranges: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccd2db',
    paddingTop: 20,
    paddingBottom: 22.5,
  },
  switches: {
    paddingTop: 15,
  },
  switchesRow: {
    marginTop: 15,
  },
  switchesText: {
    color: '#ccd2db',
    position: 'absolute',
  },
});