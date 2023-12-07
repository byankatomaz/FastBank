import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState, useEffect } from 'react';

import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Loan from '../pages/Loan'
import CreditRating from '../pages/CreditRating'
import Initial from '../pages/Initial';
import PIX from '../pages/PIX';
import TED from '../pages/TED';
import DEP from '../pages/DEP';
import Extract from '../pages/Extract';
import Card from '../pages/Card';
import Profile from '../pages/Profile';

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
                options={{
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name='DEP'
                component={DEP}
                options={{
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name='PIX'
                component={PIX}
                options={{
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name='Extract'
                component={Extract}
                options={{
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name='Loan'
                component={Loan}
                options={{
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name='Cartao'
                component={Card}
                options={{
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name='CreditRating'
                component={CreditRating}
                options={{
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    )
}