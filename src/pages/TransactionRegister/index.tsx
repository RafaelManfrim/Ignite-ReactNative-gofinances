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
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import { useNavigation } from '@react-navigation/native'

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    amount: Yup.number().typeError('Digite um valor numério').positive('O valor deve ser positivo')
})

type FormData = {
    name: string
    amount: string
}

export default function TransactionRegister() {
    const [category, setCategory] = useState({ key: 'category', name: 'Categoria' })
    const [typeSelected, setTypeSelected] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)
    const { navigate } = useNavigation()

    const collectionKey = '@gofinances:transactions'

    const { control, handleSubmit, formState: { errors }, reset } = useForm({ 
        resolver: yupResolver(schema) 
    })

    function handleTypeSelect(type: 'deposit' | 'withdraw') {
        setTypeSelected(type)
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true)
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false)
    }

    async function handleRegister(values: FormData) {
        !typeSelected && Alert.alert('Selecione o tipo da transação')

        category.key === 'category' && Alert.alert('Selecione a categoria')

        const data = {
            id: String(uuid.v4()),
            name: values.name,
            amount: values.amount,
            category: category.key,
            type: typeSelected,
            date: new Date()
        }

        try {
            const storedData = await AsyncStorage.getItem(collectionKey)
            const currentData = storedData ? JSON.parse(storedData) : {}

            if(currentData.transactions) {
                const dataFormated = { transactions: [...currentData.transactions, data] }
                
                await AsyncStorage.setItem(collectionKey, JSON.stringify(dataFormated))
            } else {
                const dataFormated = { transactions: [ data ] }

                await AsyncStorage.setItem(collectionKey, JSON.stringify(dataFormated))
            }

            reset()
            setTypeSelected("")
            setCategory({ key: 'category', name: 'Categoria' })

            navigate('Listagem' as any)

        } catch (err) {
            Alert.alert('Não foi possível salvar')
        }
    }

    return (
        <Wrapper>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header title="Cadastro" />
            <Form>
                <Fields>
                    <InputForm control={control} name="name" placeholder="Nome" autoCapitalize="sentences" autoCorrect={false} error={errors?.name?.message} />
                    <InputForm control={control} name="amount" placeholder="Valor" autoCapitalize="sentences" autoCorrect={false} keyboardType="number-pad" error={errors?.amount?.message} />
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