import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ActivityIndicator, Button, Image, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

import DisplayError from "./DisplayError";
import {getElementDetails} from "../api/myApi";
import Colors from "../definitions/Colors";

const Element = ({route, favElements, dispatch}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [element, setElement] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        requestElement();
    }, []);

    const requestElement = async () => {
        try {
            const apiElementResult = await getElementDetails(route.params.elementID);
            setElement(apiElementResult);
            setIsLoading(false);
        } catch (error) {
            setIsError(true);
        }
    }

    const saveElement = async () => {
        const action = {type: 'SAVE_ELEMENT', value: route.params.elementID};
        dispatch(action);
    }

    const unsaveElement = async () => {
        const action = {type: 'UNSAVE_ELEMENT', value: route.params.elementID};
        dispatch(action);
    }

    const displaySaveElement = () => {
        if (favElements.findIndex(i => i === route.params.elementID) !== -1) {
            return (
                <Button
                    title='Retirer des favoris'
                    color={Colors.mainGreen}
                    onPress={unsaveElement}
                />
            );
        }
        return (
            <Button
                title='Ajouter aux favoris'
                color={Colors.mainGreen}
                onPress={saveElement}
            />
        );
    }
    return (
        <View style={styles.container}>
            {isError ?
                (<DisplayError message='Impossible de récupérer les données de cet element'/>) :
                (isLoading ?
                        (<View style={styles.containerLoading}>
                            <ActivityIndicator size="large"/>
                        </View>) :
                        (<View>
                            <Image source={{uri: "https://image.tmdb.org/t/p/w500/" + element.profile_path}}   style={{  width: 500,
                                height: 500,
                                borderRadius: 12,
                                backgroundColor: Colors.mainGreen,}}/>
                            <Text style={{ fontSize: 20, fontWeight: "bold"}}>
                                {element.name}
                            </Text>

                            <Text>
                                {element.known_for_department}
                            </Text>
                            <Text> {"Birth : " + element.birthday }</Text>

                            <Text> {"Death : " + element.deathday }</Text>

                            <Text style={{fontWeight: "bold"}}> { "biography"}</Text>

                            <Text>    {element.biography}</Text>

                            <Text style={{fontWeight: "bold"}}>Credits</Text>



                            {displaySaveElement()}
                        </View>)
                )}
        </View>
    )
};

const mapStateToProps = (state) => {
    return {
        //injecteDansLeComposant: state.myValues
        favElements: state.favElementsID
    }
}

//export default connect(mapStateToProps)(MonComposant);
export default connect(mapStateToProps)(Element);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
