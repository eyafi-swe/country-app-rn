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
        marginBottom: 20,
    },
    input: {
        marginTop: 10,
    },
    saveButton: {
        marginTop: 20,
    },
    backButton: {
        marginTop: 20,
        backgroundColor: Colors.RED_HOVER,
        alignSelf: 'center',
    },

});

export default styles;