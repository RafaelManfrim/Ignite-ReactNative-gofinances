import { TransactionCard, TransactionCardProps } from '../TransactionCard'
import { TransactionsList, Title, TransactionsArea } from './styles'

export interface DataListProps extends TransactionCardProps {
    id: string
}

interface TransactionsProps {
    transactions: DataListProps[]
}

export function Transactions({ transactions }: TransactionsProps) {
    return (
        <TransactionsArea>
            <Title>Listagem</Title>
            <TransactionsList data={transactions} keyExtractor={(item) => item.id} renderItem={({ item }) => <TransactionCard data={item.data} />}/>
        </TransactionsArea>
    )
}