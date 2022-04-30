import React, { useState } from 'react';
import * as RootNavigation from "../routing/RootNavigation";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function LoginPage() {

    const [matricula, matriculaChange] = useState('');
    const [senha, senhaChange] = useState('');
    const [credenciaisValidas, setCredenciaisValidas] = useState(false);

    const validateLogin = () => {
        if (matricula === '202204123456' && senha === 'abcd') {
            setCredenciaisValidas(true);
            console.log(credenciaisValidas);
        }
        else {
            setCredenciaisValidas(false);
        }
    }

    const redirect = () => {
        credenciaisValidas === true
            ? RootNavigation.navigateTo('Cursos')
            : RootNavigation.navigateTo('Login');
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.label}>Matrícula</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(matricula => matriculaChange(matricula))}
                        value={matricula}
                        keyboardType={'number-pad'}
                    />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(senha) => senhaChange(senha)}
                        value={senha}
                        keyboardType={'default'}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>  {
                            validateLogin();
                            redirect();
                        }}
                    >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    { 
                        credenciaisValidas === false
                            ? <Text>Verifique seus dados</Text> 
                            : <Text>Entrando...</Text>
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 60,
        paddingRight: 60,
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        marginBottom: 14,
        borderColor: '#42d0e7',
        borderWidth: 4,
        backgroundColor: 'white',
        borderRadius: 12,
        paddingTop: 2,
        paddingRight: 6,
        paddingBottom: 2,
        paddingLeft: 10,
        fontSize: 16
    },
    button: {
        borderColor: '#42d0e7',
        borderWidth: 4,
        backgroundColor: '#42d0e7',
        width: '25%',
        borderRadius: 12,
        padding: 4
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
        
    },
    label: {
        fontSize: 16
    }
});