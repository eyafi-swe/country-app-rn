import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TextInputWithIconComponent from '../TextInput/TextInputWithIcon';
import SearchIcon from '../IconComponents/SearchIcon';
import CustomDropDown from '../DropDown/CustomDropDown';
import { OrderOptions } from '../../constants/Options';
import ButtonPrimary from '../Button/ButtonPrimary';

interface SortAndFilterProps {
    onApply: (sortType: string) => void;
}

const SortAndFilter: FC<SortAndFilterProps> = ({
    onApply
}) => {
    const [selected, setSelected] = useState<string>('');
    const [filterText, setFilterText] = useState<string>('');

    return (
        <View style={styles.container}>
            <TextInputWithIconComponent
                value={filterText}
                placeholder='Filter'
                icon={<SearchIcon />}
                onChangeText={setFilterText}
            />
            <CustomDropDown
                selected={selected}
                setSelected={setSelected}
                options={OrderOptions}
            />
            <ButtonPrimary
                title='Apply'
                onPress={() => onApply(selected)}
                style={styles.margin}
            />
        </View>
    );
};

export default SortAndFilter;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    margin: {
        marginTop: 60
    }
});