  import React, { useState } from 'react';
  import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
  import { Ionicons } from '@expo/vector-icons';
  import { Picker } from '@react-native-picker/picker'; 
  //caso o picker não baixar automaticamente usar o comando npm install @react-native-picker/picker

  import Cabecalho from '../Componets/Cabecalho';

  const AnalyticsScree = ({ navigation }) => {
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
      <ImageBackground source={require('../../assets/background_sprint.jpg')} style={styles.backgroundImage} blurRadius={5}>
        <View style={styles.container}>
        <Cabecalho titulo="  " imagemSource={require('../../assets/ProspAI_sprint.png')} />
          {/* Search Area */}
          <View style={styles.searchContainer}>
            <Text style={styles.searchTitle}>Pesquisar</Text>
            <View style={styles.searchInputContainer}>
              <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
              <TextInput
                placeholder="Digite sua pesquisa"
                placeholderTextColor="gray"
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
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Masculino" value="masculino" />
                <Picker.Item label="Feminino" value="feminino" />
                <Picker.Item label="Outro" value="outro" />
              </Picker>
            </View>
            <View style={styles.filtersContainer}>
              <Text style={styles.filterTitle}>Faixa Etária:</Text>
              <Picker
                selectedValue={faixaEtaria}
                onValueChange={handleFaixaEtariaChange}
                style={styles.picker}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="0-17" value="0-17" />
                <Picker.Item label="18-30" value="18-30" />
                <Picker.Item label="31-50" value="31-50" />
                <Picker.Item label="51+" value="51+" />
              </Picker>
            </View>
            <View style={styles.filtersContainer}>
              <Text style={styles.filterTitle}>Escolaridade:</Text>
              <Picker
                selectedValue={escolaridade}
                onValueChange={handleEscolaridadeChange}
                style={styles.picker}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Fundamental" value="fundamental" />
                <Picker.Item label="Médio" value="medio" />
                <Picker.Item label="Superior" value="superior" />
                <Picker.Item label="Pós-graduação" value="pos-graduacao" />
              </Picker>
            </View>
          </View>
          
          {/* Bottom Icons */}
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Analytics')}>
              <Ionicons name="analytics" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Home')}>
              <Ionicons name="home" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Complaints')}>
              <Ionicons name="alert-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 50,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    searchContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 10,
      padding: 20,
      width: '80%',
      marginBottom: 20,
    },
    searchTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'white',
    },
    searchInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
      color: 'white',
    },
    picker: {
      flex: 1,
      color: 'white',
      backgroundColor: '#333', // Cor de fundo mais escura
      borderRadius: 30, // Bordas mais arredondadas
      paddingHorizontal: 12, // Mais espaçamento interno
      marginHorizontal: 10, // Margem horizontal
      borderWidth: 1, // Adiciona uma borda
      borderColor: '#555', // Cor da borda
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      position: 'absolute',
      bottom: 20,
    },
    iconButton: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 50,
      padding: 10,
    },
  });
  

  export default AnalyticsScree;
