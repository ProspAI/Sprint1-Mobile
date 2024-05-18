import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signOut } from "firebase/auth";
import Cabecalho from '../Componets/Cabecalho';

const HomeScreen = ({ navigation, route }) => {
  const userName = route.params?.userName || 'Usuário'; // Recebendo o nome do usuário com valor padrão

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.navigate('TelaLogin'); // Redirecionando para a tela de login
      })
      .catch((error) => {
        Alert.alert('Erro ao sair', error.message);
      });
  };


import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Cabecalho from '../Componets/Cabecalho';

const HomeScreen = ({ navigation }) => {
  const temNotificacoes = false; // Supondo que não há notificações no momento

  return (
    <View style={styles.container}>
      <Cabecalho imagemSource={require('../../assets/ProspAI_sprint.png')} title="Home" onLogout={handleLogout} />
      <Text style={styles.greetingText}>Olá, {userName}!</Text>
      {!temNotificacoes && (
        <Text style={styles.noNotificationsText}>Não há notificações no momento</Text>
      )}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('AnalyticsScreen')}>
          <Ionicons name="search-outline" size={28} color="#fff" />
          <Text style={styles.navText}>Análises</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home-outline" size={28} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ComplaintsScreen')}>
          <Ionicons name="newspaper-outline" size={28} color="#fff" />
          <Text style={styles.navText}>Reclamações</Text>

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
    backgroundColor: '#f0f0f0',
  },
  greetingText: {
    fontSize: 24,
    color: '#333',
    marginTop: 20,
  },
  noNotificationsText: {
    fontSize: 16,
    color: '#333',
    marginTop: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#007bff',
    width: '100%',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,

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
