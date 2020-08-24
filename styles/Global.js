import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f7f7',
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
    },
    spacing: {
      flex: 1,
      marginHorizontal: 35,
    },
    browse: {
      marginTop: 20,
      marginHorizontal: -10,
    },
    browseItem: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      marginHorizontal: 10,
      marginBottom: 20,
      paddingVertical: 25,
    },
    browseIcon: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e9fcf6',
      borderRadius: 100,
      width: 50,
      height: 50,
    },
    browseHeader: {
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 5,
    },
    browseText: {
      color: '#ccd2db',
    },
  });