import { RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

const ButtonContainer = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: ${RFValue(18)}px ${RFValue(16)}px;
    border-radius: 8px;
`

const ButtonTitle = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    font-size: ${RFValue(14)}px;
`

export { ButtonContainer, ButtonTitle }