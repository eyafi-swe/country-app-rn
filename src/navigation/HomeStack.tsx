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
import RegionsByCountry from '../screens/RegionsByCountry/RegionsByCountry';
import CitiesByRegion from '../screens/CitiesByRegions/CitiesByRegions';
import EditCustomCountry from '../screens/EditCustomCountry/EditCustomCountry';

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
            <Stack.Screen name="RegionsByCountry" component={RegionsByCountry} />
            <Stack.Screen name="CitiesByRegion" component={CitiesByRegion} />
            <Stack.Screen name="CustomCountryList" component={CustomCountryList} />
            <Stack.Screen name="EditCustomCountry" component={EditCustomCountry} />
            <Stack.Screen name="GeneralInfo" component={GeneralInfo} />
            <Stack.Screen name="Coordinates" component={Coordinates} />
            <Stack.Screen name="Population" component={Population} />
            <Stack.Screen name="Summary" component={Summary} />
        </Stack.Navigator>
    );
};

export default HomeStack;
