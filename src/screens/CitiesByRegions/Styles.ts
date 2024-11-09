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
        marginTop: 26,
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
        fontSize: 18,
        textAlign: 'center'
    },
    regionsText: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 16,
    },
    topButton: {
        marginBottom: 20,
        alignSelf: 'flex-start'
    }
});

export default styles;

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