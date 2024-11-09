import React, { FC, useEffect, useState } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

interface ExpandableCardProps {
    item: Record<string, any>;
    style?: StyleProp<ViewStyle>
}

const ExpandableCard: FC<ExpandableCardProps> = ({
    item,
    style
}) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    useEffect(() => {
        if (expanded) {
            setTimeout(() => {
                setExpanded(false);
            }, 30000);
        }
    }, [expanded]);

    const handleExpand = () => {
        setExpanded(!expanded);
    }

    return (
        <View style={[styles.parent, style]}>
            <Text style={styles.text}>{item.name}</Text>
            <TouchableOpacity onPress={handleExpand}>
                {!expanded && <Text style={styles.plusIcon}>+</Text>}
            </TouchableOpacity>

            {expanded && <View style={styles.metadataParent}>
                <Text style={styles.metadataText}>Latitude: {item?.latitude}</Text>
                <Text style={styles.metadataText}>Longitude: {item?.longitude}</Text>
                <Text style={styles.metadataText}>Population: {item?.population}</Text>
                <Text style={styles.metadataText}>Time Zone: {item?.timeZone}</Text>
            </View>}
        </View>
    );
};

export default ExpandableCard;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        width: '80%',
        padding: 20,
        justifyContent: 'center',
        backgroundColor: Colors.END_BG,
        borderRadius: 5,
        marginBottom: 10,
    },
    text: {
        color: Colors.BLACK,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    plusIcon: {
        color: Colors.BLACK,
        fontSize: 24,
        marginTop: 10,
        fontWeight: '700',
        textAlign: 'center',
    },
    metadataParent: {
        marginTop: 10
    },
    metadataText: {
        color: Colors.BLACK,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 2
    }
});