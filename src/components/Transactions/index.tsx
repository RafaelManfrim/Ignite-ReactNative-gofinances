import { useEffect, useState } from 'react'
import { TransactionCard, TransactionCardProps  } from '../TransactionCard'
import { TransactionsList, Title, TransactionsArea } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { categories } from '../../utils/categories'

type TransactionFromStorage = {
    id: string
    amount: number
    category: string
    date: Date
    name: string
    type: "deposit" | "withdraw"
}

export interface DataListProps extends TransactionCardProps {
    id: string
}

export function Transactions() {
    const [transactions, setTransactions] = useState<DataListProps[]>([])

    const collectionKey = '@gofinances:transactions'

    async function loadTransactions() {
        const response = await AsyncStorage.getItem(collectionKey)
        const data = response ? JSON.parse(response) : []

        const transactionsFormatted: DataListProps[] = data.transactions.map((transaction: TransactionFromStorage) => {
            
            return {
                id: transaction.id,
                data: {
                    name: transaction.name,
                    amount: Number(transaction.amount).toLocaleString('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).replace('R$', 'R$ '),
                    type: transaction.type,
                    category: categories.find(category => {
                        if(category.key === transaction.category) {
                            return {
                                name: category.name,
                                icon: category.icon
                            }
                        }
                    }),
                    date: Intl.DateTimeFormat('pt-BR', { 
                        day: '2-digit', 
                        month: '2-digit', 
                        year: '2-digit' 
                    }).format(new Date(transaction.date))
                }
            }
        })

        setTransactions(transactionsFormatted)
    }

    useEffect(() => {
        loadTransactions()
    }, [])

    return (
        <TransactionsArea>
            <Title>Listagem</Title>
            <TransactionsList data={transactions} keyExtractor={(item) => item.id} renderItem={({ item }) => <TransactionCard data={item.data} />}/>
        </TransactionsArea>
    )
}