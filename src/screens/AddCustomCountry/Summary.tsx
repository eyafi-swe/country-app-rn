import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ButtonPrimary } from '../../components';
import { HomeStackParamList } from '../../types/stackTypes';
import styles from './Styles';

type SummaryScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Summary'>;

interface SummaryScreenProps {
    navigation: SummaryScreenNavigationProp;
}

const Summary: FC<SummaryScreenProps> = ({ navigation }) => {

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>Summary</Text>


            <ButtonPrimary title='Add' onPress={() => console.log('Next')} />
        </View>
    );
};

export default Summary;