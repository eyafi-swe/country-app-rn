import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        width: '100%',
        padding: 20,
        backgroundColor: Colors.CONTAINER_BG,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
    },
    flatList: {
        marginTop: 20,
        flex: 1,

    },
    countryContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: Colors.LIGHT_GRAY,
    },
    countryText: {
        fontSize: 18,
        width: '90%',
    },

});

export default styles;