// Cardapio.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cardapio = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cardápio</Text>
            <Text style={styles.item}>- Prato 1: Buchada de bode </Text>
            <Text style={styles.item}>- Prato 2: Sarapatel </Text>
            <Text style={styles.item}>- Prato 3: Fava </Text>
            <Text style={styles.item}>- Prato 4: Dobradinha </Text>
            <Text style={styles.bebidas}>- Bebida 1: Coca-Cola</Text>
            <Text style={styles.bebidas}>- Bebida 2: Guaraná Antártica</Text>
            <Text style={styles.bebidas}>- Bebida 3: Fanta</Text>
            <Text style={styles.bebidas}>- Bebida 4: Sprite </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        fontSize: 18,
        marginBottom: 10,
    },
    bebidas:{
        fontSize: 18,
        marginBottom: 10,
    }
});

export default Cardapio;
