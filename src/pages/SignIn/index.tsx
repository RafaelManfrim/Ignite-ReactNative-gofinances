import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Alert } from "react-native";

import LogoSvg from "../../assets/logo.svg"
import GoogleSvg from "../../assets/google.svg"
import AppleSvg from "../../assets/apple.svg"

import { SignInSocialButton } from "../../components/SignInSocialButton";

import { SignInContainer, SignInHeader, TitleWrapper, Title, SignInTitle, SignInFooter, FooterWrapper } from "./styles";
import { useAuth } from "../../contexts/AuthContext";

export function SignIn() {
    const { signInWithGoogle } = useAuth()

    async function handleSignInWithGoogle() {
        try {
            await signInWithGoogle()
        } catch (err) {
            console.log(err)
            Alert.alert('Não foi possível conectar a conta Foogle')
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
                    <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
                </FooterWrapper>
            </SignInFooter>
        </SignInContainer>
    )

}