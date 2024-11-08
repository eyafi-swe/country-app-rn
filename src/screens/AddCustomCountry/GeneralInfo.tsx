import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ButtonPrimary, TextInput } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import styles from './Styles';

type GeneralInfoScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'CustomCountryList'>;

interface GeneralInfoScreenProps {
    navigation: GeneralInfoScreenNavigationProp;
}

const GeneralInfo: FC<GeneralInfoScreenProps> = ({ navigation }) => {
    const [countryName, setCountryName] = useState<string>('');

    const navigateToCoordinates = () => navigation.navigate('Coordinates');

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>General Info</Text>
            <TextInput
                label='Country Name'
                value={countryName}
                onChangeText={setCountryName}
            />
            <ButtonPrimary title='Next' onPress={navigateToCoordinates} />
        </View>
    );
};

export default GeneralInfo;