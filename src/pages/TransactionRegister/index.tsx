import { useState } from 'react'
import { StatusBar, Modal, Alert } from 'react-native'
import { Wrapper } from '../../components/Wrapper'
import { Header } from '../../components/Header'
import { InputForm } from '../../components/Form/InputForm'
import { Button } from '../../components/Form/Button'
import theme from '../../global/styles/theme'
import { Form, Fields, TypeSelectArea, Footer } from './styles'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { CategorySelect } from '../CategorySelect'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    amount: Yup.number().typeError('Digite um valor numério').positive('O valor deve ser positivo')
})

type FormData = {
    name: string
    amount: string
}

export function TransactionRegister() {
    const [category, setCategory] = useState({ key: 'category', name: 'Categoria' })
    const [typeSelected, setTypeSelected] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    function handleTypeSelect(type: 'deposit' | 'withdraw') {
        setTypeSelected(type)
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true)
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false)
    }

    function handleRegister(values: FormData) {
        if(!typeSelected)
            return Alert.alert('Selecione o tipo da transação')

        if(category.key === 'category')
            return Alert.alert('Selecione a categoria')

        const data = {
            name: values.name,
            amount: values.amount,
            category: category.key,
            type: typeSelected
        }
        console.log(data)
    }

    return (
        <Wrapper>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header title="Cadastro" />
            <Form>
                <Fields>
                    <InputForm control={control} name="name" placeholder="Nome" autoCapitalize="sentences" autoCorrect={false} error={errors?.name?.message} />
                    <InputForm control={control} name="amount" placeholder="Preço" autoCapitalize="sentences" autoCorrect={false} keyboardType="number-pad" error={errors?.amount?.message} />
                    <TypeSelectArea>
                        <TransactionTypeButton isActive={typeSelected === 'deposit'} type="deposit" title="Entrada" onPress={() => handleTypeSelect('deposit')} />
                        <TransactionTypeButton isActive={typeSelected === 'withdraw'} type="withdraw" title="Saída" onPress={() => handleTypeSelect('withdraw')} />
                    </TypeSelectArea>
                    <CategorySelectButton title={category.name} onPress={handleOpenSelectCategoryModal} />
                </Fields>
                <Footer>
                    <Button onPress={handleSubmit(handleRegister)} title="Enviar" />
                </Footer>
            </Form>
            <Modal visible={categoryModalOpen}>
                <CategorySelect category={category} setCategory={setCategory} closeSelectCategory={handleCloseSelectCategoryModal}  />
            </Modal>
        </Wrapper>
    )
}