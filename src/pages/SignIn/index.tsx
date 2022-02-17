import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSvg from "../../assets/logo.svg"
import GoogleSvg from "../../assets/google.svg"
import AppleSvg from "../../assets/apple.svg"

import { SignInSocialButton } from "../../components/SignInSocialButton";

import { SignInContainer, SignInHeader, TitleWrapper, Title, SignInTitle, SignInFooter, FooterWrapper } from "./styles";

export function SignIn() {
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
                    <SignInSocialButton title="Entrar com Google" svg={GoogleSvg} />
                    <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
                </FooterWrapper>
            </SignInFooter>
        </SignInContainer>
    )

}