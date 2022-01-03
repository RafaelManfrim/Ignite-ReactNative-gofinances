import { useState } from 'react'
import { StatusBar } from 'react-native'
import { ContentWrapper } from '../../components/Wrapper/styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import theme from '../../global/styles/theme'
import { Form, Fields, TypeSelectArea } from './styles'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelect } from '../../components/Form/CategorySelect'

export function TransactionRegister() {
    const [typeSelected, setTypeSelected] = useState('')

    function handleTypeSelect(type: 'deposit' | 'withdraw') {
        setTypeSelected(type)
    }

    return (
        <ContentWrapper>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header title="Cadastro" />
            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />
                    <TypeSelectArea>
                        <TransactionTypeButton isActive={typeSelected === 'deposit'} type="deposit" title="Entrada" onPress={() => handleTypeSelect('deposit')} />
                        <TransactionTypeButton isActive={typeSelected === 'withdraw'} type="withdraw" title="Saída" onPress={() => handleTypeSelect('withdraw')} />
                    </TypeSelectArea>
                    <CategorySelect title="Categoria" />
                </Fields>
                <Button title="Enviar"/>
            </Form>
        </ContentWrapper>
    )
}