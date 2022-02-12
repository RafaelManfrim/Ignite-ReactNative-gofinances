import styled from "styled-components/native"
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize"
import { RectButton } from "react-native-gesture-handler"

const CatSelectContainer = styled(RectButton)`
    background-color: ${({theme}) => theme.colors.shape};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${RFValue(16)}px ${RFValue(12)}px;
    border-radius: 8px;
`

const Category = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text_dark};
`

const Icon = styled(Feather)`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.text};
`

export { CatSelectContainer, Category, Icon }