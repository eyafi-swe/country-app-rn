import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard/Dashboard';
import CountryByCurrency from '../screens/CountryByCurrency/CountryByCurrency';
import { HomeStackParamList } from '../types/stackTypes';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="CountryByCurrency" component={CountryByCurrency} />
        </Stack.Navigator>
    );
};

export default HomeStack;
