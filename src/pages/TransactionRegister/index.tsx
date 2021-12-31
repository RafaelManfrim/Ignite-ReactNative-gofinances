import { StatusBar } from 'react-native'
import { ContentWrapper } from '../../components/Wrapper/styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import theme from '../../global/styles/theme'
import { Form, Fields } from './styles'

export function TransactionRegister() {
    return (
        <ContentWrapper>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header title="Cadastro" />
            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />
                </Fields>
                <Button title="Enviar"/>
            </Form>
        </ContentWrapper>
    )
}