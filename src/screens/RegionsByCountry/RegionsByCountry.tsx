import React, { FC, useEffect, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Drawer from 'react-native-drawer'
import { ButtonPrimary, CardPrimary, SortAndFilter } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import { sortAscendingOrDescending } from '../../utils/helperFuntions';
import useFetch from '../../hook/useFetch';
import styles, { drawerStyles } from './Styles';

type RegionsByCountryScreenProps = NativeStackScreenProps<HomeStackParamList, 'RegionsByCountry'>;

const RegionsByCountry: FC<RegionsByCountryScreenProps> = ({ route, navigation }) => {
    const { code, name } = route.params;
    const [viewableData, setViewableData] = useState<any[]>([]);
    const drawerRef = useRef<Drawer>(null);
    const [isFetchTriggered, setIsFetchTriggered] = useState(false);
    const url = `countries/${code}/regions`;
    const param = { limit: 10 };
    const { data, loading, error, hasMore } = useFetch(url, isFetchTriggered, param);

    useEffect(() => {
        handleFindRegions();
        if (data) {
            setViewableData(data);
        }
    }, [data]);

    const handleFindRegions = () => {
        setIsFetchTriggered((prev) => !prev);
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

    const openDrawer = () => {
        if (drawerRef.current) {
            drawerRef?.current.open();
        }
    };

    const navigateToCities = (name: string, regionCode: string) => {
        navigation.navigate('CitiesByRegion', { name, code: regionCode, countryCode: code });
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
                <Text style={styles.centerText}>Country Selected: {name}</Text>
                <Text style={styles.regionsText}>Total Number of Regions: {viewableData.length}</Text>

                <View style={styles.middleSection}>
                    <Text>List of regions</Text>
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
                                        code={item.isoCode}
                                        onPress={navigateToCities}
                                    />
                                }
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

export default RegionsByCountry;