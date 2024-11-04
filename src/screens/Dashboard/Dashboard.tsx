import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import ButtonPrimary from '../../components/button/ButtonPrimary';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/stackTypes';

type DashboardScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Dashboard'>;
interface DashboardProps {
    navigation: DashboardScreenNavigationProp;
}

const Dashboard: FC<DashboardProps> = ({ navigation }) => {

    const handleOnPressExplore = () => {
        navigation.navigate('CountryByCurrency')
    }

    const handleOnPressCustomCountries = () => {
    }

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>DASHBOARD</Text>
            <ButtonPrimary title='Start Exploring' onPress={handleOnPressExplore} style={styles.buttonMargin} />
            <ButtonPrimary title='Show Custom Countries' onPress={handleOnPressCustomCountries} style={styles.buttonMargin} />
        </View>
    );
};

export default Dashboard;