import { TransactionCard, TransactionCardProps  } from '../TransactionCard'
import { TransactionsList, Title, TransactionsArea } from './styles'

export interface DataListProps extends TransactionCardProps {
    id: number
}

export function Transactions() {
    const data: DataListProps[] = [
        {
            id: 1,
            data: {
                title: "Desenvolvimento de site",
                amount: "10000",
                category: {name: "Trabalho"},
                type: "deposit",
                date: "10/10/2021",
            }
        },
        {
            id: 2,
            data: {
                title: "Lanche no shopping",
                amount: "59",
                category: {name: "Alimentação", icon: "coffee"},
                type: "withdraw",
                date: "10/10/2021",
            }
        },
        {
            id: 3,
            data: {
                title: "Camisa nova",
                amount: "27",
                category: {name: "Compras"},
                type: "withdraw",
                date: "10/10/2021",
            }
        },
        {
            id: 4,
            data: {
                title: "Camisa nova",
                amount: "27",
                category: {name: "Compras"},
                type: "withdraw",
                date: "10/10/2021",
            }
        },
        {
            id: 5,
            data: {
                title: "Camisa nova",
                amount: "27",
                category: {name: "Compras"},
                type: "withdraw",
                date: "10/10/2021",
            }
        }
    ]

    return (
        <TransactionsArea>
            <Title>Listagem</Title>
            <TransactionsList data={data} keyExtractor={(item: DataListProps) => item.id} renderItem={({ item }) => <TransactionCard data={item.data} />}/>
        </TransactionsArea>
    )
}