import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    width: ${RFValue(256)}px;
    height: ${RFValue(128)}px;
    border-radius: 8px;
    padding: 20px 24px 32px;
    margin-right: 28px;
`

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
`

const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
`

const Content = styled.View``

const Amount = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(24)}px;
    color: ${({theme}) => theme.colors.text_dark};
    margin-top: 16px;
`

const LastTransaction = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.text};
    margin-top: -12px;
`

export { Container, Header, Title, Icon, Content, Amount, LastTransaction }