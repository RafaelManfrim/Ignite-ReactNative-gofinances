import { useState } from 'react'
import { StatusBar, Modal } from 'react-native'
import { Wrapper } from '../../components/Wrapper'
import { Header } from '../../components/Header'
// import { Input } from '../../components/Form/Input'
import { InputForm } from '../../components/Form/InputForm'
import { Button } from '../../components/Form/Button'
import theme from '../../global/styles/theme'
import { Form, Fields, TypeSelectArea, Footer } from './styles'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { CategorySelect } from '../CategorySelect'
import { useForm } from 'react-hook-form'

type FormData = {
    name: string
    amount: string
}

export function TransactionRegister() {
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    })
    const [typeSelected, setTypeSelected] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    const { control, handleSubmit } = useForm()

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
                    <InputForm control={control} name="name" placeholder="Nome" />
                    <InputForm control={control} name="amount" placeholder="Preço" />
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