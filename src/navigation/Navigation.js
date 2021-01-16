import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from "../components/Home";
import Element from "../components/Element";
import FavElements from "../components/FavElements";
import TestUIKitten from "../components/TestUIKitten";

import Colors from "../definitions/Colors";
import Assets from "../definitions/Assets";

const HomeNavigation = createStackNavigator();
const FavNavigation = createStackNavigator();
const UIKittenNavigation = createStackNavigator();
const TabNavigation = createBottomTabNavigator();

function homeStackScreens() {
    return (
        <HomeNavigation.Navigator
            initialRouteName="ViewHome"
        >
            <HomeNavigation.Screen
                name="ViewHome"
                component={Home}
                options={{ title: 'Recherche' }}
            />
            <HomeNavigation.Screen
                name="ViewCommune"
                component={Element}
                options={{ title: 'Element' }}
            />
        </HomeNavigation.Navigator>
    )
};

function favStackScreens() {
    return (
        <FavNavigation.Navigator
            initialRouteName="ViewFav"
        >
            <FavNavigation.Screen
                name="ViewFav"
                component={FavElements}
                options={{ title: 'Favoris' }}
            />
            <FavNavigation.Screen
                name="ViewRestaurant"
                component={Element}
                options={{ title: 'Element' }}
            />
        </FavNavigation.Navigator>
    )
};

function UIKittenStackScreens() {
    return (
        <UIKittenNavigation.Navigator
            initialRouteName="ViewFav"
        >
            <UIKittenNavigation.Screen
                name="ViewUIKitten"
                component={TestUIKitten}
                options={{ title: 'UIKitten' }}
            />
            <UIKittenNavigation.Screen
                name="ViewRestaurant"
                component={Element}
                options={{ title: 'Element' }}
            />
        </UIKittenNavigation.Navigator>
    )
};

function RootStack() {
    return (
        <TabNavigation.Navigator
            tabBarOptions={{
                activeTintColor: Colors.mainGreen,
            }}>
            <TabNavigation.Screen
                name="Recherche"
                component={homeStackScreens}
                options={() => ({
                    tabBarIcon: ({ color }) => {
                        return <Image source={Assets.icons.search} style={{ tintColor: color }} />;
                    }
                })}
            />
            <TabNavigation.Screen
                name="Favoris"
                component={favStackScreens}
                options={() => ({
                    tabBarIcon: ({ color }) => {
                        return <Image source={Assets.icons.fav} style={{ tintColor: color }} />;
                    }
                })}
            />

            <TabNavigation.Screen
                name="UIKitten"
                component={UIKittenStackScreens}
                options={() => ({
                    tabBarIcon: ({ color }) => {
                        return <Image source={Assets.icons.emty} style={{ tintColor: color }} />;
                    }
                })}
            />
        </TabNavigation.Navigator>
    );
}

export default RootStack
