import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Cabecalho from '../Componets/Cabecalho';

const HomeScreen = ({ navigation }) => {
  const temNotificacoes = false; // Supondo que não há notificações no momento

  return (
    <View style={styles.container}>
      <Cabecalho imagemSource={require('../../assets/ProspAI_sprint.png')} userName=" " />
      
      {!temNotificacoes && (
        <Text style={styles.noNotificationsText}>Não há notificações no momento</Text>
      )}
      
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('AnalyticsScreen')}>
          <Ionicons name="search-outline" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('ComplaintsScreen')}>
          <Ionicons name="newspaper-outline" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#696969', // Fundo mais claro
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  iconButton: {
    backgroundColor: '#333',
    borderRadius: 50,
    padding: 12,
  },
  noNotificationsText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 20,
  },
});

export default HomeScreen;
