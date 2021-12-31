import { StatusBar } from 'react-native'
import { ContentWrapper } from '../../components/Wrapper/styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Form/Input'
import theme from '../../global/styles/theme'
import { Form } from './styles'

export function TransactionRegister() {
    return (
        <ContentWrapper>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header title="Cadastro" />
            <Form>
                <Input placeholder="Nome" />
                <Input placeholder="Preço" />
            </Form>
        </ContentWrapper>
    )
}