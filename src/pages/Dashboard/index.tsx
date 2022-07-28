import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Wrapper } from '../../components/Wrapper'
import { Header } from '../../components/Header'
import { HighlightCard } from '../../components/HighlightCard'
import { DataListProps, Transactions } from '../../components/Transactions'
import { categories } from '../../utils/categories'
import { useAuth } from '../../contexts/AuthContext'
import { TransactionFromStorage } from '../../types'
import { Cards } from './styles'

export default function Dashboard() {
    const [transactions, setTransactions] = useState<DataListProps[]>([])
    const [highlightCardValues, setHighlightCardValues] = useState({
        withdraw: { amount: 0, lastTransaction: '' },
        deposit: { amount: 0, lastTransaction: '' },
        total: { amount: 0, lastTransaction: '' },
    })

    const { withdraw, deposit, total } = highlightCardValues

    const { user } = useAuth()

    const collectionKey = `@gofinances:transactions_user:${user.id}`

    async function loadTransactions() {
        const response = await AsyncStorage.getItem(collectionKey)
        const data = response ? JSON.parse(response) : {}

        if (data.transactions) {
            let entriesSum = 0
            let expensiveSum = 0

            const transactionsFormatted: DataListProps[] = data.transactions.map((transaction: TransactionFromStorage) => {

                if (transaction.type === 'deposit') {
                    entriesSum += Number(transaction.amount)
                } else {
                    expensiveSum += Number(transaction.amount)
                }

                const transactionFormatted = {
                    id: transaction.id,
                    data: {
                        name: transaction.name,
                        amount: Number(transaction.amount).toLocaleString('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).replace('R$', 'R$ '),
                        type: transaction.type,
                        category: categories.find(category => {
                            if (category.key === transaction.category) {
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

                return transactionFormatted
            })

            setTransactions(transactionsFormatted)

            function getLastTransactionDate(type: string) {
                let transactionsDates = []
                let lastTransaction

                if (type === 'total') {
                    transactionsDates = data.transactions.map(({ date }: TransactionFromStorage) => new Date(date).getTime())
                } else {
                    const transactionsFiltered = data.transactions.filter((transaction: TransactionFromStorage) => transaction.type === type)
                    transactionsDates = transactionsFiltered.map(({ date }: TransactionFromStorage) => new Date(date).getTime())

                }

                if (transactionsDates.length > 0) {
                    lastTransaction = new Date(Math.max.apply(Math, transactionsDates))

                    return Intl.DateTimeFormat('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit'
                    }).format(new Date(lastTransaction))
                }

                return ''

            }

            setHighlightCardValues({
                deposit: {
                    amount: entriesSum,
                    lastTransaction: getLastTransactionDate('deposit')
                },
                withdraw: {
                    amount: expensiveSum,
                    lastTransaction: getLastTransactionDate('withdraw')
                },
                total: {
                    amount: entriesSum - expensiveSum,
                    lastTransaction: getLastTransactionDate('total')
                }
            })
        }
    }

    useFocusEffect(useCallback(() => {
        loadTransactions()
    }, []))

    return (
        <Wrapper>
            <Header dashboardHeader />
            <Cards>
                <HighlightCard
                    type="deposit"
                    title="Entradas"
                    amount={deposit.amount}
                    lastTransaction={deposit.lastTransaction !== '' ? `Última entrada ${deposit.lastTransaction}` : 'Nenhuma entrada registrada'}
                />
                <HighlightCard
                    type="withdraw"
                    title="Saídas"
                    amount={withdraw.amount}
                    lastTransaction={withdraw.lastTransaction !== '' ? `Última saída ${withdraw.lastTransaction}` : 'Nenhuma saída registrada'}
                />
                <HighlightCard
                    type="total"
                    title="Total"
                    amount={total.amount}
                    lastTransaction={total.lastTransaction !== '' ? `Última transação ${total.lastTransaction}` : 'Nenhuma transação registrada'}
                />
            </Cards>
            <Transactions transactions={transactions} />
        </Wrapper>
    )
}