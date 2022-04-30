import React from 'react';
import { 
    StyleSheet, Text, View, TouchableOpacity, 
    ActivityIndicator, Image, ScrollView 
} from 'react-native';
import cursos from '../api/cursos.json';

export default function DetalhesCurso({route, navigation}) {

    const { cursoId } = route.params;
    const cursoSelecionado = cursos.find(curso => curso.id === cursoId);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.textBotao}>Voltar</Text>
            </TouchableOpacity>
            <ScrollView>
                <Text style={styles.nome}>{cursoSelecionado.nome}</Text>
                <Image 
                    style={styles.thumbnail} 
                    source={{uri: cursoSelecionado.urlImagem}}
                />
                <Text style={styles.area}>Área: {cursoSelecionado.area}</Text>
                <Text style={styles.semestres}>Duração: {cursoSelecionado.duracaoEmSemestres} semestres</Text>
                <Text style={styles.descricao}> {cursoSelecionado.descricao} </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    thumbnail: {
        height: 300,
        width: '98%'
    },
    botao: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 2,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#42d0e7',
        borderWidth: 4,
        borderRadius: 20
    },
    textBotao: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 18
    },
    listagem: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    nome: {
        paddingBottom: 10,
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 'bold'
    },
    descricao: {
        fontFamily: 'Inter',
        fontStyle: 'normal'
    },
    area: {
        color: 'black',
        fontSize: 12,
        fontWeight: '500',
        paddingTop: 5
    },
    semestres: {
        color: 'blue',
        fontSize: 11,
        fontWeight: '400',
        paddingTop: 5,
        paddingBottom: 4
    }
});