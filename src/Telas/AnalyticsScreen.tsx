import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { getAuth, signOut } from "firebase/auth";
import Cabecalho from '../Componets/Cabecalho';

const AnalyticsScreen = ({ navigation }) => {
  const [genero, setGenero] = useState('');
  const [faixaEtaria, setFaixaEtaria] = useState('');
  const [escolaridade, setEscolaridade] = useState('');

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

  return (
    <View style={styles.container}>
      <Cabecalho imagemSource={require('../../assets/ProspAI_sprint.png')} title="Análises" onLogout={handleLogout} />
      <View style={styles.searchContainer}>
        <Text style={styles.searchTitle}>Pesquisar</Text>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={24} color="#007bff" style={styles.searchIcon} />
          <TextInput
            placeholder="Digite sua pesquisa"
            placeholderTextColor="#666"
            style={styles.searchInput}
            onChangeText={(text) => console.log(text)}
          />
        </View>
        <View style={styles.filtersContainer}>
          <Text style={styles.filterTitle}>Gênero:</Text>
          <RNPickerSelect
            onValueChange={(value) => setGenero(value)}
            items={[
              { label: 'Masculino', value: 'masculino' },
              { label: 'Feminino', value: 'feminino' },
            ]}
            style={pickerSelectStyles}
            value={genero}
          />
        </View>
        <View style={styles.filtersContainer}>
          <Text style={styles.filterTitle}>Faixa Etária:</Text>
          <RNPickerSelect
            onValueChange={(value) => setFaixaEtaria(value)}
            items={[
              { label: '18-24', value: '18-24' },
              { label: '25-34', value: '25-34' },
              { label: '35-44', value: '35-44' },
              { label: '45-54', value: '45-54' },
              { label: '55-64', value: '55-64' },
              { label: '65+', value: '65+' },
            ]}
            style={pickerSelectStyles}
            value={faixaEtaria}
          />
        </View>
        <View style={styles.filtersContainer}>
          <Text style={styles.filterTitle}>Escolaridade:</Text>
          <RNPickerSelect
            onValueChange={(value) => setEscolaridade(value)}
            items={[
              { label: 'Ensino Médio', value: 'ensino_medio' },
              { label: 'Graduação', value: 'graduacao' },
              { label: 'Pós-graduação', value: 'pos_graduacao' },
              { label: 'Mestrado', value: 'mestrado' },
              { label: 'Doutorado', value: 'doutorado' },
            ]}
            style={pickerSelectStyles}
            value={escolaridade}
          />
        </View>
      </View>
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
        </TouchableOpacity>
      </View>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    paddingHorizontal: 12,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#f0f0f0',
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  searchTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
    textAlign: 'center',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  filterTitle: {
    fontSize: 16,
    color: '#007bff',
    marginRight: 10,
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
  },
});

export default AnalyticsScreen;
