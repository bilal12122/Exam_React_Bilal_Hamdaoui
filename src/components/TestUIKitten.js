import React from 'react';
import {List} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';

import fakeElements from "../helpers/fakeElements";

import RenderItemUIKitten from "./RenderItemUIKitten";


const TestUIKitten = ({navigation}) => {

    return (
        <View style={styles.container}>
            <List
                data={fakeElements}
                keyExtractor={(item) => item.element.id.toString()}
                renderItem={({item}) => (
                    <RenderItemUIKitten element={item.element}/>
                )}
            />
        </View>
    );

}

export default TestUIKitten;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        marginTop: 16,
    },
});


