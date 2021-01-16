import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Colors from "../definitions/Colors";
import Assets from "../definitions/Assets";

const ElementListItem = ({onClick, element, isFav = false}) => {
    return (

        <TouchableOpacity style={styles.container} onPress={() => {
            onClick(element.id)
        }}>
            <Image style={styles.thumbnail}/>
            <View style={styles.informationContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {element.name}
                    </Text>
                    {isFav ?
                        (<Image style={[styles.icon, { marginLeft: 'auto' }]} source={Assets.icons.fav} />) :
                        (null)
                    }
                </View>
            </View>
        </TouchableOpacity>

    );
};


export default ElementListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
    },
    thumbnail: {
        width: 128,
        height: 128,
        borderRadius: 12,
        backgroundColor: Colors.mainGreen,
    },
    informationContainer: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    icon: {
        tintColor: Colors.mainGreen,
    },
});
