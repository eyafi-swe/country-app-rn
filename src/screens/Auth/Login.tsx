import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FC, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/authSlice';
import { ButtonPrimary } from '../../components';
import { MainStackParamList } from '../../types/stackTypes';
import { loginStyles } from './Styles';

type LoginScreenProp = NativeStackNavigationProp<MainStackParamList, 'Login'>;

interface ScreenProps {
    navigation: LoginScreenProp;
}


const Login: FC<ScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    const dismissKeyboard = () => Keyboard.dismiss();

    const handleLogin = async () => {
        if (!validateInput()) return;

        try {
            const storedUser = await AsyncStorage.getItem('user');
            if (storedUser) {
                const user = JSON.parse(storedUser);

                if (user.email === email && user.password === password) {
                    setLoading(true);
                    setTimeout(() => {
                        setLoading(false);
                        dispatch(setUser({ userEmail: email }));
                        navigation.navigate('HomeStack');
                    }, 1000);
                } else {
                    setError('Invalid email or password');
                }
            } else {
                setError('No user found. Please register first');
            }
        } catch (error) {
            console.error(error);
            setError('Failed to retrieve user data');
        }
    };

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    };

    const validateInput = () => {
        if (!email.trim()) {
            setEmailError('Email cannot be empty');
            return false;
        } else if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            return false;
        }
        if (!password.trim()) {
            setPasswordError('Password cannot be empty');
            return false;
        }
        return true;
    }

    const getInputStyle = (hasError: boolean) => {
        return StyleSheet.flatten([loginStyles.input, hasError && loginStyles.inputError]);
    };

    const navigateToSignUp = () => navigation.navigate('Register');

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={loginStyles.container}>
                <Text style={loginStyles.headline}>SIGN IN</Text>
                <TextInput
                    style={getInputStyle(!!emailError)}
                    placeholder="Enter your email"
                    placeholderTextColor="#aaa"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                {emailError ? <Text style={loginStyles.errorText}>{emailError}</Text> : null}
                <TextInput
                    style={getInputStyle(!!passwordError)}
                    placeholder="Enter your password"
                    placeholderTextColor="#aaa"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {passwordError ? <Text style={loginStyles.errorText}>{passwordError}</Text> : null}
                {error ? <Text style={loginStyles.errorText}>{error}</Text> : null}


                <ButtonPrimary
                    title={loading ? 'Logging in...' : 'LOGIN'}
                    onPress={handleLogin}
                    disabled={loading}
                    style={loginStyles.button}
                />

                <View style={loginStyles.signupContainer}>
                    <Text style={loginStyles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={navigateToSignUp}>
                        <Text style={loginStyles.signupLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
};

export default Login;

