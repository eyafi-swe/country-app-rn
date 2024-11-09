import React, { FC, useEffect, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Drawer from 'react-native-drawer'
import { ButtonPrimary, ExpandableCard, FilterItems } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import { sortAscendingOrDescending } from '../../utils/helperFuntions';
import useFetch from '../../hook/useFetch';
import styles, { drawerStyles } from './Styles';

type CitiesByRegionScreenProps = NativeStackScreenProps<HomeStackParamList, 'CitiesByRegion'>;

const CitiesByRegion: FC<CitiesByRegionScreenProps> = ({ route, navigation }) => {
    const { code, name, countryCode } = route.params;
    const [viewableData, setViewableData] = useState<any[]>([]);
    const drawerRef = useRef<Drawer>(null);
    const [isFetchTriggered, setIsFetchTriggered] = useState(false);
    const [param, setParam] = useState<Record<string, string | number>>({ limit: 10 });
    const url = `countries/${countryCode}/regions/${code}/cities`;
    const { data, loading, error, hasMore } = useFetch(url, isFetchTriggered, param);

    useEffect(() => {
        handleFindCities();
        if (data) {
            setViewableData(data);
        }
    }, [data]);

    const handleFindCities = () => setIsFetchTriggered((prev) => !prev);

    const handleFetchMore = () => {
        if (hasMore) {
            setIsFetchTriggered((prev) => !prev);
        }
    }

    const handleFilter = (order: string, filterObj: Record<string, string | number>) => {
        setParam(filterObj);
        handleFindCities();
        if (order) {
            const sortedData = [...sortAscendingOrDescending(data, order)];
            setViewableData(sortedData);
        }
    }

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
            content={<FilterItems onApply={handleFilter} />}
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
                <Text style={styles.centerText}>Region Selected: {name}</Text>
                <Text style={styles.regionsText}>Total Number of Cities: {viewableData.length}</Text>

                <View style={styles.middleSection}>
                    <Text>List of cities</Text>
                    <ButtonPrimary title='Filter' onPress={openDrawer} style={styles.filterButton} />
                </View>
                {
                    loading ? <Text>Loading...</Text> :
                        viewableData.length === 0 ? <Text style={styles.centerText}>No data found</Text> :
                            <FlatList
                                data={viewableData}
                                renderItem={({ item }) => <ExpandableCard item={item} />}
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

export default CitiesByRegion;