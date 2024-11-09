import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MainStackParamList } from '../../types/stackTypes';
import { ButtonPrimary } from '../../components';
import { registerStyles } from './Styles';

type RegisterScreenProp = NativeStackNavigationProp<MainStackParamList, 'Register'>;

interface ScreenProps {
    navigation: RegisterScreenProp;
}

const Register: FC<ScreenProps> = ({ navigation }) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false);

    const validateFields = () => {
        const newErrors: { [key: string]: string } = {};

        if (!firstName.trim()) newErrors.firstName = 'First Name cannot be empty';
        if (!lastName.trim()) newErrors.lastName = 'Last Name cannot be empty';
        if (!address.trim()) newErrors.address = 'Address cannot be empty';
        if (!validateEmail(email)) newErrors.email = 'Please enter a valid email';
        if (!phone.trim()) newErrors.phone = 'Phone Number cannot be empty';
        if (!password) newErrors.password = 'Password cannot be empty';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    };

    const dismissKeyboard = () => Keyboard.dismiss();

    const handleRegister = async () => {
        if (validateFields()) {
            try {
                const userData = {
                    firstName,
                    lastName,
                    address,
                    email,
                    phone,
                    password,
                };
                await AsyncStorage.setItem('user', JSON.stringify(userData));
                navigation.navigate('Login');
            } catch (error) {
                console.error(error);
                Alert.alert('Error', 'Failed to save user data');
            }
        }
    };

    const getInputStyle = (hasError: boolean) => {
        return StyleSheet.flatten([registerStyles.input, hasError && registerStyles.inputError]);
    };

    const navigateToLogin = () => navigation.navigate('Login')

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={registerStyles.container}>
                <Text style={registerStyles.headline}>SIGN UP</Text>

                <TextInput
                    style={getInputStyle(!!errors.firstName)}
                    placeholder="First Name"
                    placeholderTextColor="#aaa"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                {errors.firstName ? <Text style={registerStyles.errorText}>{errors.firstName}</Text> : null}

                <TextInput
                    style={getInputStyle(!!errors.lastName)}
                    placeholder="Last Name"
                    placeholderTextColor="#aaa"
                    value={lastName}
                    onChangeText={setLastName}
                />
                {errors.lastName ? <Text style={registerStyles.errorText}>{errors.lastName}</Text> : null}

                <TextInput
                    style={getInputStyle(!!errors.address)}
                    placeholder="Address"
                    placeholderTextColor="#aaa"
                    value={address}
                    onChangeText={setAddress}
                />
                {errors.address ? <Text style={registerStyles.errorText}>{errors.address}</Text> : null}

                <TextInput
                    style={getInputStyle(!!errors.email)}
                    placeholder="Email"
                    placeholderTextColor="#aaa"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                {errors.email ? <Text style={registerStyles.errorText}>{errors.email}</Text> : null}

                <TextInput
                    style={getInputStyle(!!errors.phone)}
                    placeholder="Phone Number"
                    placeholderTextColor="#aaa"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
                {errors.phone ? <Text style={registerStyles.errorText}>{errors.phone}</Text> : null}


                <View style={registerStyles.passwordInputContainer}>
                    <TextInput
                        style={[getInputStyle(!!errors.password), registerStyles.passwordInput]}
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Text style={registerStyles.toggleText}>{passwordVisible ? 'Hide' : 'Show'}</Text>
                    </TouchableOpacity>
                </View>
                {errors.password ? <Text style={registerStyles.errorText}>{errors.password}</Text> : null}

                <View style={registerStyles.passwordInputContainer}>
                    <TextInput
                        style={[getInputStyle(!!errors.confirmPassword), registerStyles.passwordInput]}
                        placeholder="Confirm Password"
                        placeholderTextColor="#aaa"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!confirmPasswordVisible}
                    />
                    <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                        <Text style={registerStyles.toggleText}>{confirmPasswordVisible ? 'Hide' : 'Show'}</Text>
                    </TouchableOpacity>
                </View>
                {errors.confirmPassword ? <Text style={registerStyles.errorText}>{errors.confirmPassword}</Text> : null}

                <ButtonPrimary
                    title="REGISTER"
                    onPress={handleRegister}
                    style={registerStyles.button}
                />

                <View style={registerStyles.signupContainer}>
                    <Text style={registerStyles.signupText}>Already have an account? </Text>
                    <TouchableOpacity
                        onPress={navigateToLogin}
                    >
                        <Text style={registerStyles.signupLink}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Register;
