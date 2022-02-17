import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Button = styled(RectButton)`
    background: ${({theme}) => theme.colors.shape};
    height: ${RFValue(56)}px;
    border-radius: 8px;
    margin-bottom: 12px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

const ImageContainer = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: ${RFValue(16)}px;
    border-color: ${({theme}) => theme.colors.background};
    border-right-width: 1px;
`

const SignInSocialButtonText = styled.Text`
    flex: 1;
    text-align: center;
    font-weight: 600;
    font-size: ${RFValue(14)}px;
`

export { Button, ImageContainer, SignInSocialButtonText }