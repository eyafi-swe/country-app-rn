import React, { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { logoutUser } from '../../redux/slices/authSlice';
import { HomeStackParamList } from '../../types/stackTypes';
import { ButtonPrimary } from '../../components';
import styles from './Styles';

type DashboardScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Dashboard'>;
interface DashboardProps {
    navigation: DashboardScreenNavigationProp;
}

const Dashboard: FC<DashboardProps> = ({ navigation }) => {
    const dispatch = useDispatch();

    const handleOnPressExplore = () => navigation.navigate('CountryByCurrency');
    const handleOnPressCustomCountries = () => navigation.navigate('CustomCountryList');
    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>DASHBOARD</Text>
            <ButtonPrimary title='Start Exploring' onPress={handleOnPressExplore} style={styles.buttonMargin} />
            <ButtonPrimary title='Show Custom Countries' onPress={handleOnPressCustomCountries} style={styles.buttonMargin} />
            <ButtonPrimary title='Logout' onPress={handleLogout} style={styles.logoutButton} />
        </View>
    );
};

export default Dashboard;