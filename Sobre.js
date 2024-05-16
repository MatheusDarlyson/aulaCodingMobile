// SobreRestaurante.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sobre = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre o Restaurante</Text>
            <Text style={styles.info}>Endereço: Mercado da Boa vista</Text>
            <Text style={styles.info}>Telefone: (81) 3432-9057</Text>
            <Text style={styles.info}>Horário de Funcionamento: </Text>
            <Text style={styles.info}>Seg-Sex: 10h às 15h, Sáb-Dom: 09h às 16h</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    info: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default Sobre;
