import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CabecalhoProps {
  imagemSource: any;
  userName?: string;
  title: string;
  onLogout?: () => void;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ imagemSource, userName, title, onLogout }) => {
  return (
    <View style={styles.container}>
      <Image source={imagemSource} style={styles.imagem} />
      <Text style={styles.title}>{title}</Text>
      {userName && <Text style={[styles.texto, styles.userName]}>{userName}</Text>}
      {onLogout && (
        <TouchableOpacity onPress={onLogout}>
          <Ionicons name="log-out-outline" size={24} color="white" style={styles.logoutIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
  },
  imagem: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  texto: {
    color: 'white',
    fontSize: 16,
  },
  userName: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  logoutIcon: {
    marginLeft: 10,
  },
});

export default Cabecalho;
