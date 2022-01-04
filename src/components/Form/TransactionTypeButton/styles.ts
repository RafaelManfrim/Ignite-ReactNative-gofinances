import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

type SelectTypeIconProps = {
    type: 'deposit' | 'withdraw'
}

type TransactionTypeContainerProps = {
    isActive: boolean
    type: 'deposit' | 'withdraw'
}

const TransactionTypeContainer = styled.TouchableOpacity<TransactionTypeContainerProps>`
    width: 47%;
    padding: ${RFValue(18)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 0.5px solid ${({ theme }) => theme.colors.text};
    background-color: ${({theme}) => theme.colors.shape};

    ${({type, isActive}) => isActive && type === 'deposit' && css`
        background-color: ${({theme}) => theme.colors.success_light};
    `};

    ${({type, isActive}) => isActive && type === 'withdraw' && css`
        background-color: ${({theme}) => theme.colors.attention_light};
    `};
`

const Icon = styled(Feather)<SelectTypeIconProps>`
    font-size: ${RFValue(24)}px;
    color: ${({ type, theme }) => type === 'deposit' ? theme.colors.success : type === 'withdraw' ? theme.colors.attention : theme.colors.shape};
`

const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-left: 8px;
`

export { TransactionTypeContainer, Icon, Title }