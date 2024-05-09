import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CabecalhoProps {
  titulo: string;
  imagemSource: any;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ titulo, imagemSource }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/ProspAI_sprint.png')} style={styles.imagem} />
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 15,
    width: '100%', // Para ocupar toda a largura da tela
  },
  imagem: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  texto: {
    color: 'white',
    fontSize: 20,
  },
});

export default Cabecalho;
