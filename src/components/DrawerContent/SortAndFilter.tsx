import React, { useState } from 'react';
import { Text, View } from 'react-native';
import TextInputWithIconComponent from '../TextInput/TextInputWithIcon';
import SearchIcon from '../IconComponents/SearchIcon';
import CustomDropDown from '../DropDown/CustomDropDown';
import { SortOptions } from '../../constants/Options';
import ButtonPrimary from '../Button/ButtonPrimary';

const SortAndFilter = () => {
    const [selected, setSelected] = useState<string>('');
    return (
        <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
            <TextInputWithIconComponent
                value=''
                placeholder='Filter'
                icon={<SearchIcon />}
                onChangeText={() => { }}
            />
            <CustomDropDown
                selected={selected}
                setSelected={setSelected}
                options={SortOptions}
            />
            <ButtonPrimary
                title='Apply'
                onPress={() => { }}
                style={{ marginTop: 60 }}
            />
        </View>
    );
};

export default SortAndFilter;