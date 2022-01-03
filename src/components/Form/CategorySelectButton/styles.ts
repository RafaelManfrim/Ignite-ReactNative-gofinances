import styled from "styled-components/native"
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize"

const CatSelectContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
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