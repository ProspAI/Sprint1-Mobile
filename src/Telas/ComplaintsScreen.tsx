import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, RefreshControl, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signOut } from "firebase/auth";
import Cabecalho from '../Componets/Cabecalho';

const ComplaintsScreen = ({ navigation }) => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);

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

  const fetchFeedbacks = () => {
    fetch('http://192.168.0.17:8080/feedbacks') // Substitua pelo endereço IP da sua máquina
      .then(response => {
        console.log("Response Status:", response.status);
        return response.json();
      })
      .then(data => {
        console.log("Response Data:", JSON.stringify(data, null, 2));
        if (data._embedded && data._embedded.feedbackResponseDTOList) {
          setComplaints(data._embedded.feedbackResponseDTOList);
        } else {
          setComplaints([]);
        }
        setLoading(false);
        setRefreshing(false);
      })
      .catch(error => {
        console.log("Fetch Error:", error);
        setError(true);
        setLoading(false);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchFeedbacks();
  };

  return (
    <View style={styles.container}>
      <Cabecalho imagemSource={require('../../assets/ProspAI_sprint.png')} title="Reclamações" onLogout={handleLogout} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {loading ? (
          <Text style={styles.loadingText}>Carregando...</Text>
        ) : error || complaints.length === 0 ? (
          <Text style={styles.noNotificationsText}>Não há reclamações no momento</Text>
        ) : (
          complaints.map((complaint) => (
            <View key={complaint.id} style={styles.complaintCard}>
              <Text style={styles.complaintTitle}>{complaint.titulo}</Text>
              <Text style={styles.complaintText}>{complaint.descricao}</Text>
              <Text style={styles.complaintNota}>Nota: {complaint.nota}</Text>
            </View>
          ))
        )}
      </ScrollView>
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

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Cabecalho from '../Componets/Cabecalho';

const ComplaintsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Cabecalho imagemSource={require('../../assets/ProspAI_sprint.png')} userName=" " />
      
      <Text style={styles.noNotificationsText}>Não há reclamações no momento</Text>
      
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
  scrollContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  loadingText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
  noNotificationsText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
  complaintCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  complaintTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff',
  },
  complaintText: {
    fontSize: 16,
    color: '#333',
  },
  complaintNota: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
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

export default ComplaintsScreen;
