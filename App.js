/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import Home from './src/pages/Home'


const Navigator = StackNavigator(
    {
        RootTabs: {
            screen: Home,
            navigationOptions: {
                header: null
            },
            mode: 'card',
        }
    }
);

export default Navigator;