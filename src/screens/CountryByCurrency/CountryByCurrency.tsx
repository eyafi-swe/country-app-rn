import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles, { pickerSelectStyles } from './Styles';
import { currencyData } from '../../constants/CurrencyCodes';
import useFetch from '../../hook/useFetch';
import { ButtonPrimary, CardPrimary } from '../../components';

const CountryByCurrency = () => {
    const [currencyCode, setCurrencyCode] = useState<string>('');
    const [isFetchTriggered, setIsFetchTriggered] = useState(false);
    const url = currencyCode ? 'countries' : null;
    const param = { currencyCode: currencyCode };
    const { data, loading, error, } = useFetch(url, isFetchTriggered, param);

    const handleFindCountries = () => {
        if (currencyCode) {
            setIsFetchTriggered((prev) => !prev);
        }
    };

    return (
        <View style={styles.parent}>
            <Text>Select a currency</Text>
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
                <ButtonPrimary title='Filter' onPress={() => { }} style={styles.filterButton} />
            </View>
            {
                loading ? <Text>Loading...</Text> :

                    <FlatList
                        data={data}
                        renderItem={({ item }) => <CardPrimary text={item.name} />}
                        keyExtractor={(item) => item.code}
                        contentContainerStyle={styles.flatListContainer}
                        style={styles.flatListStyle}
                    />}
        </View>
    );
};

export default CountryByCurrency;