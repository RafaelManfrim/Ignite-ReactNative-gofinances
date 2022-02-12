import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

type CategoryProps = {
    isActive: boolean
}

const Category = styled.TouchableOpacity.attrs({ activeOpacity: 0.6 })<CategoryProps>`
    flex-direction: row;
    align-items: center;
    margin: 12px 28px 0;
    background-color: ${({theme, isActive}) => isActive ? theme.colors.success_light : theme.colors.shape};
    padding: ${RFValue(16)}px ${RFValue(12)}px;
    border-radius: 8px;
    border: 0.5px solid ${({ theme }) => theme.colors.text};
`

const Icon = styled(Feather)`
    margin-right: ${RFValue(12)}px;
    font-size: ${RFValue(16)}px;
`

const Label = styled.Text`
    font-size: ${RFValue(14)}px;
`

const Footer = styled.View`
    margin: 0 28px 12px;
`

export { Category, Icon, Label, Footer }