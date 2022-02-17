import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

const SignInContainer = styled.View`
    flex: 1;
`

const SignInHeader = styled.View`
    width: 100%;
    height: 70%;
    background: ${({theme}) => theme.colors.primary};
    justify-content: flex-end;
    align-items: center;
`

const TitleWrapper = styled.View`
    align-items: center;
`

const Title = styled.Text`
    font-weight: 600;
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(28)}px;
    text-align: center;

    margin-top: 45px;
`

const SignInTitle = styled.Text`
    font-weight: 400;
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(16)}px;
    text-align: center;

    margin-top: 80px;
    margin-bottom: 67px;
`

const SignInFooter = styled.View`
    width: 100%;
    height: 30%;
    align-items: center;
    background: ${({theme}) => theme.colors.secondary};
`

const FooterWrapper = styled.View`
    margin-top: ${RFPercentage(-4)}px;
    width: 100%;
    align-items: center;
    padding: 0 32px;
    justify-content: space-between;
`

export { SignInContainer, SignInHeader, TitleWrapper, Title, SignInTitle, SignInFooter, FooterWrapper }