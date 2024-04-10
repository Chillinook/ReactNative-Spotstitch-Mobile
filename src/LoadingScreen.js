import React, { useEffect } from 'react';
import Background from './components/Background';
import Logo from './components/Logo';
import Paragraph from './Paragraph';


export default function LoginScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('LoginScreen');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Background>
            <Logo />
            <Paragraph>SPOTSTITCH</Paragraph>
        </Background>
    );
}
