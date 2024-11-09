import React, { FC } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { removeCountry } from '../../redux/slices/customCountrySlice';
import { RootState } from '../../redux/store';
import { ButtonPrimary, DeleteIcon, FloatingPlusButton } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import { CustomCountryItem } from '../../types';
import styles from './Styles';

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

    const navigateToDashboard = () => navigation.navigate('Dashboard');

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
            <ButtonPrimary title='Go Dashboard' onPress={navigateToDashboard} style={styles.bottomButton} />
            <FloatingPlusButton onPress={navigateToGeneralInfo} />
        </View>
    );
};

export default CustomCountryList;