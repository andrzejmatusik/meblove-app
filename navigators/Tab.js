import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Products from '../screens/Products';
import Inspirations from '../screens/Inspirations';

const Tab = createMaterialTopTabNavigator();

function TabNavigator() {
    return (
        <NavigationContainer
            independent={true}
        >
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        backgroundColor: 'transparent',
                        shadowOffset: 0,
                    },
                    indicatorStyle: {
                        backgroundColor : '#c9a586',
                    },
                    labelStyle: {
                        textTransform: 'none',
                    },
                }}
            >
                <Tab.Screen name="Produkty" component={Products} />
                <Tab.Screen name="Inspiracje" component={Inspirations} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigator;