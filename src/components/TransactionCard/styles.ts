import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

type CardProps = {
    type: 'deposit' | 'withdraw'
}

const Card = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    margin-bottom: 16px;
    padding: 16px 24px;
    border-radius: 8px;
`

const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.title};
`

const Amount = styled.Text<CardProps>`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(20)}px;
    color: ${({theme, type}) => type === 'deposit' ? theme.colors.success : theme.colors.attention};
`

const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

const Category = styled.View`
    flex-direction: row;
    align-items: center;
`

const Icon = styled(Feather)`
    font-size: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.text};
`

const Name = styled.Text`
    margin-left: 8px;
    margin-top: 4px;
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.text};
`

const Date = styled.Text`
    margin-top: 4px;
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.text};
`

export { Card, Title, Amount, Footer, Category, Icon, Name, Date }