import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function LoginPage() {

    const [matricula, matriculaChange] = useState('');
    const [senha, senhaChange] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Matrícula</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(matricula => matriculaChange(matricula))}
                        value={matricula}
                        keyboardType={'number-pad'}
                    />

                    <Text>Senha</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(senha) => senhaChange(senha)}
                        value={senha}
                        keyboardType={'default'}
                    />

                    <TouchableOpacity>
                        <Text>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 60,
        paddingRight: 60,
        backgroundColor: '#42d0e7',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white'
    }
});