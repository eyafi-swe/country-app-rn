import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator()

const MainStack = () => {
    const user = true;
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >

            {user ? <Stack.Screen name="HomeStack" component={HomeStack} />
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