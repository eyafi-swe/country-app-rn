import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TextInputWithIconComponent from '../TextInput/TextInputWithIcon';
import { SortByOptions, OrderOptions, TypeOptions } from '../../constants/Options';
import SearchIcon from '../IconComponents/SearchIcon';
import CustomDropDown from '../DropDown/CustomDropDown';
import ButtonPrimary from '../Button/ButtonPrimary';
import TextInputComponent from '../TextInput/TextInput';

interface FilterItemsProps {
    onApply: (order: string, filterObj: Record<string, string | number>) => void;
}

const FilterItems: FC<FilterItemsProps> = ({ onApply }) => {
    const [order, setOrder] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [sortBy, setSortBy] = useState<string>('');
    const [filterText, setFilterText] = useState<string>('');
    const [keyword, setKeyword] = useState<string>('');
    const [offset, setOffset] = useState<string>('');
    const [limit, setLimit] = useState<string>('');
    const [minPopulation, setMinPopulation] = useState<string>('');

    const handleApply = () => {
        let filterObj: Record<string, string | number> = {};
        keyword && (filterObj['namePrefix'] = keyword);
        offset && (filterObj['offset'] = parseInt(offset));
        limit && (filterObj['limit'] = parseInt(limit));
        type && (filterObj['types'] = type);
        sortBy && (filterObj['sort'] = sortBy);
        minPopulation && (filterObj['minPopulation'] = parseInt(minPopulation));
        onApply(order, filterObj);
    };

    return (
        <View style={styles.container}>
            <TextInputWithIconComponent
                value={filterText}
                placeholder='Filter'
                icon={<SearchIcon />}
                onChangeText={setFilterText}
            />
            <CustomDropDown
                selected={order}
                setSelected={setOrder}
                options={OrderOptions}
            />
            <TextInputComponent
                placeholder='Keyword'
                value={keyword}
                onChangeText={setKeyword}
            />
            <TextInputComponent
                placeholder='Offset'
                value={offset}
                type='nummeric'
                onChangeText={(text) => setOffset(text)}
            />
            <TextInputComponent
                placeholder='Limit'
                value={limit}
                type='nummeric'
                onChangeText={(text) => setLimit(text)}
            />
            <CustomDropDown
                label='Type'
                selected={type}
                setSelected={setType}
                options={TypeOptions}
            />
            <CustomDropDown
                label='Sort By'
                selected={sortBy}
                setSelected={setSortBy}
                options={SortByOptions}
            />
            <TextInputComponent
                placeholder='Min Population'
                value={minPopulation}
                type='nummeric'
                onChangeText={(text) => setMinPopulation(text)}
                style={styles.margin}
            />
            <ButtonPrimary
                title='Apply'
                onPress={handleApply}
                style={styles.margin}
            />
        </View>
    );
};

export default FilterItems;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    margin: {
        marginTop: 10
    }
});