import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet} from 'react-native';


import {Provider} from 'react-redux';
import {Store, Persistor} from './src/store/config';
import {PersistGate} from 'redux-persist/integration/react';

import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import Navigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Provider store={Store}>
                <PersistGate loading={null} persistor={Persistor}>
                    <NavigationContainer style={styles.container}>
                        <Navigation/>
                        <StatusBar style="auto"/>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </ApplicationProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 24,
    },
});
