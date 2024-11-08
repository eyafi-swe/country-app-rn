import React, { FC, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './Styles';
import { FloatingPlusButton } from '../../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/stackTypes';

type CustomCountryListScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'CustomCountryList'>;

interface CustomCountryListProps {
    navigation: CustomCountryListScreenNavigationProp;
}

const CustomCountryList: FC<CustomCountryListProps> = ({ navigation }) => {

    const navigateToGeneralInfo = () => navigation.navigate('GeneralInfo');

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>Your Custom Countries</Text>
            <FloatingPlusButton onPress={navigateToGeneralInfo} />
        </View>
    );
};

export default CustomCountryList;