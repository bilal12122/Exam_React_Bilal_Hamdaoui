import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';

import Colors from "../definitions/Colors";
import Assets from "../definitions/Assets";

const ElementListItem = ({onClick, element, isFav = false}) => {

//      const textData = ({data}) => {
//          let res = "";
// console.log(data);
//      //    data.map((item) => {
//     // console.log(item);
//     //return;
//
//         //         res += item.title + ", ";
//
//          return (
//              <Text style={[styles.data, styles.stat]}>
//                  {res}
//              </Text>
//          )
//      };




    return (
        /*
        <TouchableOpacity style={styles.container} onPress={() => {
            onClick(element.id)
        }}>
            <Image source={{uri: "https://image.tmdb.org/t/p/w200/" + element.profile_path}}   style={styles.thumbnail}/>
            <View style={styles.informationContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {element.name}
                    </Text>
                    <Text style={[styles.data, styles.cuisine]}
                          numberOfLines={1}>
                        {"Le loup"}
                    </Text>
                    {isFav ?
                        (<Image style={[styles.icon, { marginLeft: 'auto' }]} source={Assets.icons.fav} />) :
                        (null)
                    }
                </View>
            </View>
        </TouchableOpacity>
*/

        <TouchableOpacity style={styles.container} onPress={() => {onClick(element.id)}}>
            <Image source={{uri: "https://image.tmdb.org/t/p/w200/" + element.profile_path}}   style={styles.thumbnail}/>
            <View style={styles.informationContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {element.name}
                    </Text>
                    <Text style={[styles.data, styles.cuisine]}
                          numberOfLines={1}>
                        {element.known_for_department}
                    </Text>

                </View>
                <View style={styles.statContainer}>





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
    informationContainer: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    statsContainer: {
        flexDirection: 'row',
        marginTop: 12,
    },
    statContainer: {
        flexDirection: 'row',
        marginRight: 8,
    },
    noThumbnailContainer: {
        width: 128,
        height: 128,
        alignItems: 'center',
        justifyContent: 'center',
    },
    thumbnail: {
        width: 128,
        height: 128,
        borderRadius: 12,
        backgroundColor: Colors.mainGreen,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    data: {
        fontSize: 16,
    },
    cuisine: {
        fontStyle: 'italic',
    },
    icon: {
        tintColor: Colors.mainGreen,
    },
    stat: {
        marginLeft: 4,
    },
});
