import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cardapio from './Cardapio';
import SobreRestaurante from './Sobre';

const App = () => {
  const [abaAtiva, setAbaAtiva] = useState('Cardapio');

  const renderizarConteudo = () => {
    if (abaAtiva === 'Cardapio') {
      return <Cardapio />;
    } else if (abaAtiva === 'SobreRestaurante') {
      return <SobreRestaurante />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nomeRestaurante}>Restaurante Arretado</Text>
        <Text style={styles.fraseImpacto}>Sabores Nordestinos!</Text>
      </View>
      {/* Área para renderizar os componentes */}
      <View style={styles.content}>{renderizarConteudo()}</View>
      {/* Menu inferior */}
      <View style={styles.menu}>
        <Text
          style={[styles.menuItem, abaAtiva === 'Cardapio' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('Cardapio')}
        >
          Cardápio
        </Text>
        <Text
          style={[styles.menuItem, abaAtiva === 'SobreRestaurante' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('SobreRestaurante')}
        >
          Sobre o restaurante
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    // alignItems: 'center',
  },
  nomeRestaurante: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fraseImpacto: {
    fontSize: 18,
    color: '#666',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  menuItem: {
    fontSize: 18,
    color: '#333',
  },
  menuItemAtiva: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;
