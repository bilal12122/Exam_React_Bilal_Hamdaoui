import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, FlatList, Keyboard} from 'react-native';

import {connect} from 'react-redux';

import Colors from "../definitions/Colors";

import ElementListItem from "./ElementListItem";
import DisplayError from "./DisplayError";


import {getElements} from "../api/myApi";

const Home = ({navigation, favElements}) => {
    /***
     * Permet gerer la liste des elements
     */
    const [elements, setElements] = useState([]);
    /***
     * Permet d'afficher les elements rechercher par term
     */
    const [searchTerm, setSearchTerm] = useState('');
    /**
     * Permet d'afficher un loader lors du chargement de la page
     */
    const [isRefreshing, setIsRefreshing] = useState(false);
    /**
     * Permet d'afficher une erreur
     */
    const [isError, setIsError] = useState(false);

    const [nextOffset, setNextOffset] = useState(0);

    const [isMoreResults, setIsMoreResults] = useState(true);

    const requestElements = async (prevRestaurants, offset) => {
        setIsRefreshing(true);
        setIsError(false);
        try {
            const apiSearchResult = await getElements(searchTerm, offset);
            //console.log(apiSearchResult);
            setElements([...prevRestaurants, ...apiSearchResult.results]);
            if (apiSearchResult.page < apiSearchResult.total_pages) {
                setIsMoreResults(true);
                setNextOffset(apiSearchResult.page+1);
            } else {
                setIsMoreResults(false);
            }
        } catch (error) {
            setIsError(true);
            setElements([]);
            setIsMoreResults(true);
            setNextOffset(0);
        }
        setIsRefreshing(false);

    };




    /***
     * Permet de chercher la liste des elements par un appel api
     * Appeler lors qu'on clique sur le boutton rechercher
     * @returns {Promise<void>}
     */
    const searchElements = async () => {
        Keyboard.dismiss();
        requestElements([], 0);

    }
    const loadMoreElements = () => {
        if (isMoreResults) {
            requestElements(elements, nextOffset);
        }
        ;
    }
    const navigateToElementDetails = (elementID) => {

        navigation.navigate("ViewCommune", {elementID});
    };

    const amIaFavElement = (elementID) => {
        if (favElements.findIndex(i => i === elementID) !== -1) {
            return true;
        }
        return false;
    };
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Nom element'
                style={styles.inputElementName}
                onChangeText={(text) => setSearchTerm(text)}
                onSubmitEditing={searchElements}
            />
            <Button title='Rechercher'
                    color={Colors.mainGreen}
                    onPress={searchElements}/>
            {isError ?
                (<DisplayError message='Impossible de récupérer les elements'/>) :
                (<FlatList
                    data={elements}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <ElementListItem element={item} onClick={navigateToElementDetails} isFav={amIaFavElement(item.id)}/>
                    )}
                    refreshing={isRefreshing}
                    onRefresh={searchElements}
                    onEndReached={loadMoreElements}
                    onEndReachedThreshold={0.5}
                />)
            }
        </View>
    );

};

const mapStateToProps = (state) => {
    return {
        //injecteDansLeComposant: state.myValues
        favElements: state.favElementsID
    }
}
//export default connect(mapStateToProps)(MonComposant);
export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        marginTop: 16,
    },
    inputElementName: {
        marginBottom: 16,
    },
});
