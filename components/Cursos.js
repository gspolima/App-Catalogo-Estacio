import React from "react";
import { 
    StyleSheet, View, Text, ActivityIndicator, FlatList, Image, TouchableWithoutFeedback
} from "react-native";
import cursos from '../api/cursos.json';

export default function Cursos({navigation}) {

    const curso = ({item}) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.navigate('DetalhesCurso', {cursoId: item.id})
                }}
            >
                <View style={styles.listagem}>
                    <Text style={styles.nome}> {item.nome} </Text>
                    <Image
                        style={styles.thumbnail}
                        source={{uri: item.urlImagem}}
                    />
                    <Text style={styles.area}>Área: {item.area}</Text>
                    <Text style={styles.semestres}>Duração: {item.duracaoEmSemestres} semestres</Text>
                </View>

            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={styles.container}>
           
            <FlatList
                data={cursos}
                renderItem={curso}
                keyExtractor={(item) => item.id}
                style={{width: '85%'}}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    thumbnail: {
        height: 130,
        width: '100%'
    },
    listagem: {
        paddingTop: 15,
        paddingBottom: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    nome: {
        paddingBottom: 10,
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 'bold'
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