import React, { FC, useEffect, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RNPickerSelect from 'react-native-picker-select';
import Drawer from 'react-native-drawer'
import { currencyData } from '../../constants/CurrencyCodes';
import { ButtonPrimary, CardPrimary, SortAndFilter } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import { sortAscendingOrDescending } from '../../utils/helperFuntions';
import useFetch from '../../hook/useFetch';
import styles, { drawerStyles, pickerSelectStyles } from './Styles';

type CountryByCurrencyScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'CountryByCurrency'>;

interface ScreenProps {
    navigation: CountryByCurrencyScreenNavigationProp;
}

const CountryByCurrency: FC<ScreenProps> = ({ navigation }) => {
    const [viewableData, setViewableData] = useState<any[]>([]);
    const [currencyCode, setCurrencyCode] = useState<string>('');
    const drawerRef = useRef<Drawer>(null);
    const [isFetchTriggered, setIsFetchTriggered] = useState(false);
    const url = currencyCode ? 'countries' : null;
    const param = { currencyCode: currencyCode, limit: 10 };
    const { data, loading, error, hasMore } = useFetch(url, isFetchTriggered, param);

    useEffect(() => {
        if (data) {
            setViewableData(data);
        }
    }, [data]);

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

    const handleFilter = (sortType: string) => {
        const sortedData = [...sortAscendingOrDescending(data, sortType)];
        setViewableData(sortedData);
    }

    const navigateToRegions = (name: string, code: string) => navigation.navigate('RegionsByCountry', { code, name });

    const openDrawer = () => {
        if (drawerRef.current) {
            drawerRef?.current.open();
        }
    };

    const handleGoBack = () => navigation.goBack();

    return (
        <Drawer
            ref={drawerRef}
            type="overlay"
            content={<SortAndFilter onApply={handleFilter} />}
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
                        viewableData.length === 0 ? <Text style={styles.centerText}>No data found</Text> :
                            <FlatList
                                data={viewableData}
                                renderItem={({ item }) =>
                                    <CardPrimary
                                        name={item.name}
                                        code={item.code}
                                        onPress={navigateToRegions}
                                    />}
                                keyExtractor={(item) => item.code}
                                contentContainerStyle={styles.flatListContainer}
                                onEndReachedThreshold={0.1}
                                onEndReached={handleFetchMore}
                                style={styles.flatListStyle}
                                ListFooterComponent={loading ? <Text>Loading...</Text> : null}
                            />
                }
            </View>
        </Drawer>
    );
};

export default CountryByCurrency;