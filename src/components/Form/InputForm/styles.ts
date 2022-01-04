import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

const Error = styled.Text`
    color: ${({theme}) => theme.colors.attention};
    margin-top: -${RFValue(9)}px;
    margin-bottom: ${RFValue(10)}px;
    font-size: ${RFValue(11)}px;
`

export { Error }