import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

const Container = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.shape};
    /* padding: 16px 12px; */
    padding: ${RFValue(16)}px ${RFValue(12)}px;
    border-radius: 8px;
    margin-bottom: ${RFValue(10)}px;
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_dark};
`

export { Container }