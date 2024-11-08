import React, { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';
import { DeleteIcon, FloatingPlusButton } from '../../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/stackTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { CustomCountryItem } from '../../types';
import { removeCountry } from '../../redux/slices/customCountrySlice';

type CustomCountryListScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'CustomCountryList'>;

interface CustomCountryListProps {
    navigation: CustomCountryListScreenNavigationProp;
}

const CustomCountryList: FC<CustomCountryListProps> = ({ navigation }) => {
    const { countries } = useSelector((state: RootState) => state.customCountry);
    const dispatch = useDispatch();

    const navigateToGeneralInfo = () => navigation.navigate('GeneralInfo');

    const deleteCountry = (id: string) => {
        dispatch(removeCountry(id));
    }

    const renderCountry = ({ item }: { item: CustomCountryItem }) => (
        <View style={styles.countryContainer}>
            <Text style={styles.countryText}>{item.name}</Text>
            <TouchableOpacity onPress={() => deleteCountry(item.id)}>
                <DeleteIcon />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>Your Custom Countries</Text>
            <FlatList
                data={countries}
                keyExtractor={item => item.id}
                renderItem={renderCountry}
                style={styles.flatList}
            />
            <FloatingPlusButton onPress={navigateToGeneralInfo} />
        </View>
    );
};

export default CustomCountryList;