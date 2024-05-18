import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';// futura implementaçao de um icone de log out

// importações omitidas para brevidade

interface CabecalhoProps {
  imagemSource: any;
  userName?: string;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ imagemSource, userName }) => {
  return (
    <View style={styles.container}>
      <Image source={imagemSource} style={styles.imagem} />
      {userName && <Text style={[styles.texto, styles.userName]}>{userName}</Text>}
    </View>
  );
};

// estilos omitidos para brevidade



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Alinha os itens à direita
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
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
  userName: {
    marginLeft: 'auto', // Alinha o texto à direita
  },
});

export default Cabecalho;
