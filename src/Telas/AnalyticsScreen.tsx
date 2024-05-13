import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

import Cabecalho from '../Componets/Cabecalho';

const AnalyticsScreen = ({ navigation }) => {
  const [genero, setGenero] = useState('');
  const [faixaEtaria, setFaixaEtaria] = useState('');
  const [escolaridade, setEscolaridade] = useState('');

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
      
      {/* Bottom Icons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Analytics')}>
          <Ionicons name="search-outline" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('HomesCreen  ')}>
          <Ionicons name="home" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Complaints')}>
          <Ionicons name="newspaper-outline" size={32} color="#fff" />
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
    backgroundColor: '#696969', // Fundo mais claro
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
    fontSize: 15,
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  filterTitle: {
    marginRight: 10,
    color: '#333',
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
});

export default AnalyticsScreen;
