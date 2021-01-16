import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';


import ElementListItem from "../components/ElementListItem"
import DisplayError from '../components/DisplayError';


import {getElementDetails} from "../api/myApi";

const FavElements = ({ navigation, favElements }) => {

    const [elements, setElements] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        refreshFavElements();
    }, [favElements]); // A chaque fois que les restaurants favoris changent

    const refreshFavElements = async () => {
        setIsRefreshing(true);
        setIsError(false);
        let elements = [];
        try {
            for (const id of favElements) {
                const apiSearchResult = await getElementDetails(id)
                elements.push(apiSearchResult);
            };
            setElements(elements);
        } catch (error) {
            setIsError(true);
            setElements([]);
        }
        setIsRefreshing(false);
    };

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
            {
                isError ?
                    (<DisplayError message='Impossible de récupérer les elements favoris' />) :
                    (<FlatList
                        data={elements}
                        extraData={favElements}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <ElementListItem
                                element={item}
                                onClick={navigateToElementDetails}
                                isFav={amIaFavElement(item.id)} />
                        )}
                        refreshing={isRefreshing}
                        onRefresh={refreshFavElements}
                    />)
            }
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        favElements: state.favElementsID
    }
}
export default connect(mapStateToProps)(FavElements);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        marginTop: 16,
    },
});
