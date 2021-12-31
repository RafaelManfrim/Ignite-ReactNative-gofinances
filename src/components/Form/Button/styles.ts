import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

const ButtonContainer = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 20px 16px;
    border-radius: 8px;
`

const ButtonTitle = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    font-size: ${RFValue(14)}px;
`

export { ButtonContainer, ButtonTitle}