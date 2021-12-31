import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import theme from '../../global/styles/theme'

type CardProps = {
    type: 'deposit' | 'withdraw' | 'total'
    amount?: number
}

const { colors } = theme 

const containerColor = ({amount, type}: CardProps) => type === 'total' ? amount && amount >= 0 ? colors.success : colors.attention : colors.shape

const Container = styled.View<CardProps>`
    background-color: ${containerColor};
    width: ${RFValue(256)}px;
    height: ${RFValue(128)}px;
    border-radius: 8px;
    padding: ${RFValue(20)}px ${RFValue(24)}px ${RFValue(32)}px;
    margin-right: ${RFValue(28)}px;
`

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

const Title = styled.Text<CardProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.title};
`

const Icon = styled(Feather)<CardProps>`
    font-size: ${RFValue(24)}px;
    color: ${({ type, theme }) => type === 'deposit' ? theme.colors.success : type === 'withdraw' ? theme.colors.attention : theme.colors.shape};
`

const Content = styled.View``

const Amount = styled.Text<CardProps>`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(24)}px;
    margin-top: ${RFValue(10)}px;
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`

const LastTransaction = styled.Text<CardProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(11)}px;
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text};
    margin-top: ${RFValue(-10)}px;
`

export { Container, Header, Title, Icon, Content, Amount, LastTransaction }