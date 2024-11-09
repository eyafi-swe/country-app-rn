import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import HomeStack from './HomeStack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { MainStackParamList } from '../types/stackTypes';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
    const { isLoggedIn } = useSelector((state: RootState) => state.auth);

    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >

            {isLoggedIn ? <Stack.Screen name="HomeStack" component={HomeStack} />
                :
                <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                </>
            }


        </Stack.Navigator>
    )
};

export default MainStack;