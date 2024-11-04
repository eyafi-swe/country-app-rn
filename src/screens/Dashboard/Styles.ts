import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'center',
        backgroundColor: Colors.CONTAINER_BG,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
    },
    buttonMargin: {
        marginTop: 20,
    }
});

export default styles;