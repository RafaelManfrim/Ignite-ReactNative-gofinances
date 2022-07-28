import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { ActivityIndicator, Alert, Platform } from "react-native";
import { useTheme } from "styled-components"

import LogoSvg from "../../assets/logo.svg"
import GoogleSvg from "../../assets/google.svg"
import AppleSvg from "../../assets/apple.svg"

import { useAuth } from "../../contexts/AuthContext";
import { SignInSocialButton } from "../../components/SignInSocialButton";

import { SignInContainer, SignInHeader, TitleWrapper, Title, SignInTitle, SignInFooter, FooterWrapper } from "./styles";

export function SignIn() {
    const [isLoading, setIsLoading] = useState(false);
    const { signInWithGoogle, signInWithApple } = useAuth()
    const { colors } = useTheme()

    async function handleSignInWithGoogle() {
        try {
            setIsLoading(true)
            await signInWithGoogle()
        } catch (err) {
            console.log(err)
            Alert.alert('Não foi possível conectar a conta Google')
            setIsLoading(false)
        }
    }

    async function handleSignInWithApple() {
        try {
            setIsLoading(true)
            await signInWithApple()
        } catch (err) {
            console.log(err)
            Alert.alert('Não foi possível conectar a conta Apple')
            setIsLoading(false)
        }
    }

    return (
        <SignInContainer>
            <SignInHeader>
                <TitleWrapper>
                    <LogoSvg width={RFValue(160)} height={RFValue(120)} />
                    <Title>Controle suas{'\n'}finanças de forma{'\n'}muito simples</Title>
                </TitleWrapper>
                <SignInTitle>
                    Faça seu login com{'\n'}uma das contas abaixo
                </SignInTitle>
            </SignInHeader>
            <SignInFooter>
                <FooterWrapper>
                    <SignInSocialButton title="Entrar com Google" svg={GoogleSvg} onPress={handleSignInWithGoogle} />
                    {Platform.OS === 'ios' && <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} onPress={handleSignInWithApple} />}
                </FooterWrapper>
                {isLoading && <ActivityIndicator color={colors.primary} style={{ marginTop: 18 }} />}
            </SignInFooter>
        </SignInContainer>
    )

}