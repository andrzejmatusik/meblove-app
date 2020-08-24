import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { GoldenButton } from '../components/CustomButtons';
import Navbar from '../components/Navbar';
import { globalStyles } from '../styles/Global';

export default function Login({ navigation }) {
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
            Logowanie
          </Text>
        </View>
        {/* form */}
        <View style={styles.form}>
          <TextInput
              style={styles.input} 
              placeholder="E-mail"
              keyboardType="email-address"
          />
          <TextInput
              style={styles.input}  
              placeholder="Hasło"
          />
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <GoldenButton text='Zaloguj się' onPress={() => navigation.navigate('Browse')} />
          <Text style={styles.footerText}>Wersja testowa. Wpisz cokolwiek.</Text>
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
  form: {
    marginBottom: 25,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccd2db',
    marginBottom: 50,
    paddingVertical: 10,
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#ccd2db',
  },
});