import React, { FC, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Drawer from 'react-native-drawer'
import styles, { drawerStyles, pickerSelectStyles } from './Styles';
import { currencyData } from '../../constants/CurrencyCodes';
import useFetch from '../../hook/useFetch';
import { ButtonPrimary, CardPrimary, SortAndFilter } from '../../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/stackTypes';

type CountryByCurrencyScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'CountryByCurrency'>;

interface ScreenProps {
    navigation: CountryByCurrencyScreenNavigationProp;
}

const CountryByCurrency: FC<ScreenProps> = ({ navigation }) => {
    const [currencyCode, setCurrencyCode] = useState<string>('');
    const drawerRef = useRef<Drawer>(null);
    const [isFetchTriggered, setIsFetchTriggered] = useState(false);
    const url = currencyCode ? 'countries' : null;
    const param = { currencyCode: currencyCode };
    const { data, loading, error, hasMore } = useFetch(url, isFetchTriggered, param);

    const handleFindCountries = () => {
        if (currencyCode) {
            setIsFetchTriggered((prev) => !prev);
        }
    };

    const handleFetchMore = () => {
        if (hasMore) {
            setIsFetchTriggered((prev) => !prev);
        }
    }

    const closedrawer = () => {
        if (drawerRef.current) {
            drawerRef?.current.close();
        }
    };

    const openDrawer = () => {
        if (drawerRef.current) {
            drawerRef?.current.open();
        }
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <Drawer
            ref={drawerRef}
            type="overlay"
            content={<SortAndFilter />}
            tapToClose={true}
            openDrawerOffset={0.2}
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            styles={drawerStyles}
            tweenHandler={(ratio) => ({
                main: { opacity: (2 - ratio) / 2 }
            })}
        >

            <View style={styles.parent}>
                <ButtonPrimary title='Back' onPress={handleGoBack} style={styles.topButton} />
                <Text style={styles.centerText}>Select a currency</Text>
                <RNPickerSelect
                    value={currencyCode}
                    onValueChange={(value) => setCurrencyCode(value)}
                    items={currencyData}
                    placeholder={{ label: 'Select a currency', value: null }}
                    style={pickerSelectStyles}
                />
                <ButtonPrimary title='Find Countries' onPress={handleFindCountries} style={styles.buttonMargin} />
                <View style={styles.middleSection}>
                    <Text>List of countries</Text>
                    <ButtonPrimary title='Filter' onPress={openDrawer} style={styles.filterButton} />
                </View>
                {
                    loading ? <Text>Loading...</Text> :
                        data.length === 0 ? <Text style={styles.centerText}>No data found</Text> :
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <CardPrimary text={item.name} />}
                                keyExtractor={(item) => item.code}
                                contentContainerStyle={styles.flatListContainer}
                                onEndReachedThreshold={0.1}
                                onEndReached={handleFetchMore}
                                style={styles.flatListStyle}
                                ListFooterComponent={loading ? <Text>Loading...</Text> : null}
                            />}
            </View>
        </Drawer>
    );
};

export default CountryByCurrency;