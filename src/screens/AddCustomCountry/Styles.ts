import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: Colors.CONTAINER_BG,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
    bottomButtonsParent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    groupedButton: {
        width: '48%',
    }

});

export default styles;