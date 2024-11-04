import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../screens/Dashboard/Dashboard';

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Dashboard'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    )
};

export default HomeStack;