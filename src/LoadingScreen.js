import React, { useEffect } from 'react';
import Background from './Background';
import Logo from './Logo';
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
