import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    headline: {
        fontSize: 32,
        marginBottom: 40,
        color: '#4B0082',
    },
    input: {
        width: '90%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingLeft: 10,
        fontSize: 16,
        color: '#333',
    },
    inputError: {
        borderColor: 'red',
    },
    button: {
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signupText: {
        fontSize: 16,
        color: '#333',
    },
    signupLink: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4B0082',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: -10,
        marginBottom: 20,

    },
});

const registerStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    headline: {
        fontSize: 32,
        marginBottom: 40,
        color: '#4B0082',
    },
    input: {
        width: '90%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingLeft: 10,
        fontSize: 16,
        color: '#333',
    },
    inputError: {
        borderColor: 'red',
    },
    button: {

        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signupText: {
        fontSize: 16,
        color: '#333',
    },
    signupLink: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4B0082',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: -10,
        marginBottom: 20,
    },
    toggleText: {
        fontSize: 14,
        color: '#4B0082',
        marginBottom: 10,
    },
    passwordInput: {
        width: '80%',
        flex: 1,
        fontSize: 16,
        color: '#333',
        borderWidth: 0,
        marginBottom: 0
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        width: '90%',
        marginBottom: 20,
        paddingHorizontal: 10,
    }
});

export { loginStyles, registerStyles };