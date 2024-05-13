import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import Cabecalho from '../Componets/Cabecalho';

const AnalyticsScreen = ({ navigation }) => {
  const [genero, setGenero] = useState('');
  const [faixaEtaria, setFaixaEtaria] = useState('');
  const [escolaridade, setEscolaridade] = useState('');

  const handleGeneroChange = (value) => {
    setGenero(value);
  };

  const handleFaixaEtariaChange = (value) => {
    setFaixaEtaria(value);
  };

  const handleEscolaridadeChange = (value) => {
    setEscolaridade(value);
  };

  return (
    <View style={styles.container}>
      <Cabecalho imagemSource={require('../../assets/ProspAI_sprint.png')} userName="Usuário" />
      
      {/* Search Area */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchTitle}>Pesquisar</Text>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={24} color="#333" style={styles.searchIcon} />
          <TextInput
            placeholder="Digite sua pesquisa"
            placeholderTextColor="#666"
            style={styles.searchInput}
            onChangeText={(text) => console.log(text)}
          />
        </View>
        <View style={styles.filtersContainer}>
          <Text style={styles.filterTitle}>Gênero:</Text>
          <Picker
            selectedValue={genero}
            onValueChange={handleGeneroChange}
            style={styles.picker}
          >
            {/* Picker items */}
          </Picker>
        </View>
        <View style={styles.filtersContainer}>
          <Text style={styles.filterTitle}>Faixa Etária:</Text>
          <Picker
            selectedValue={faixaEtaria}
            onValueChange={handleFaixaEtariaChange}
            style={styles.picker}
          >
            {/* Picker items */}
          </Picker>
        </View>
        <View style={styles.filtersContainer}>
          <Text style={styles.filterTitle}>Escolaridade:</Text>
          <Picker
            selectedValue={escolaridade}
            onValueChange={handleEscolaridadeChange}
            style={styles.picker}
          >
            {/* Picker items */}
          </Picker>
        </View>
      </View>
      
      {/* Bottom Icons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Analytics')}>
          <Ionicons name="analytics" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Complaints')}>
          <Ionicons name="alert-circle" size={32} color="#fff" />
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
    backgroundColor: '#f8f8f8', // Fundo mais claro
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    marginBottom: 20,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterTitle: {
    marginRight: 10,
    color: '#333',
  },
  picker: {
    flex: 1,
    color: '#333',
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    paddingHorizontal: 12,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
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
    padding: 15,
  },
});

export default AnalyticsScreen;
