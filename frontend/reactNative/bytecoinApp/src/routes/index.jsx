import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState, useEffect } from 'react';

import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Logout from '../pages/Logout'
import Loan from '../pages/Loan'
import CreditRating from '../pages/CreditRating'
import Initial from '../pages/Initial';
import PIX from '../pages/PIX';
import TED from '../pages/TED';
import DEP from '../pages/DEP';
import Extract from '../pages/Extract';

const Stack = createNativeStackNavigator()

export default function Routes() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Tempo em milissegundos (3 segundos no exemplo)
    }, []);

    return (
        <Stack.Navigator>
            {isLoading ? (
                <Stack.Screen
                 name="Welcome" 
                 component={Welcome} 
                 options={{ headerShown: false }}
                />
            ) : (
                <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ headerShown: false }}
                />
            )}

            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUp}
                options={{ headerShown: false }}
            /> 
            <Stack.Screen
                name='Initial'
                component={Initial}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='TED'
                component={TED}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='DEP'
                component={DEP}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='PIX'
                component={PIX}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Extract'
                component={Extract}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Loan'
                component={Loan}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='CreditRating'
                component={CreditRating}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Logout'
                component={Logout}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}