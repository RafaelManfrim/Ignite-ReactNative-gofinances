import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

const Container = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 16px 12px;
    border-radius: 8px;
    margin-bottom: 8px;
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_dark}
`

export { Container }