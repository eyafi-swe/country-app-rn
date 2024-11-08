import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard/Dashboard';
import CountryByCurrency from '../screens/CountryByCurrency/CountryByCurrency';
import { HomeStackParamList } from '../types/stackTypes';
import CustomCountryList from '../screens/CustomCountryList/CustomCountryList';
import GeneralInfo from '../screens/AddCustomCountry/GeneralInfo';
import Coordinates from '../screens/AddCustomCountry/Coordinates';
import Population from '../screens/AddCustomCountry/Population';
import Summary from '../screens/AddCustomCountry/Summary';

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
            <Stack.Screen name="CustomCountryList" component={CustomCountryList} />
            <Stack.Screen name="GeneralInfo" component={GeneralInfo} />
            <Stack.Screen name="Coordinates" component={Coordinates} />
            <Stack.Screen name="Population" component={Population} />
            <Stack.Screen name="Summary" component={Summary} />
        </Stack.Navigator>
    );
};

export default HomeStack;
