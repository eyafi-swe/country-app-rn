import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        width: '100%',
        padding: 20,
        // alignItems: 'center',
        backgroundColor: Colors.CONTAINER_BG,
    },
    buttonMargin: {
        marginTop: 20,
    },
    middleSection: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    filterButton: {
        backgroundColor: Colors.PAST_DUE_BG
    },
    flatListContainer: {
        flexGrow: 1,
        paddingVertical: 10
    },
    flatListStyle: {
        width: '100%',
        marginTop: 20
    },
    centerText: {
        textAlign: 'center'
    },
    topButton: {
        marginBottom: 20,
        alignSelf: 'flex-start'
    }
});

export default styles;

export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
    },
    inputAndroid: {
        marginTop: 10,
        backgroundColor: Colors.END_BG,
        fontSize: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: Colors.BLACK,
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
    },
});

export const drawerStyles = {
    drawer: {
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        backgroundColor: '#FFF',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    main: {
        paddingLeft: 3,
    },

}