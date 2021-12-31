import { StatusBar } from 'react-native'
import { Header } from '../../components/Header'
import theme from '../../global/styles/theme'
import {  } from './styles'
import { ContentWrapper } from '../../components/Wrapper/styles'

export function TransactionRegister() {
    return (
        <ContentWrapper>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header headerTitle="Cadastro" />
            
        </ContentWrapper>
    )
}