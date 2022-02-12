import { Card, Title, Amount, Footer, Category, Icon, Name, Date } from './styles'

type Category = {
    name: string
    icon?: string
}

export interface TransactionCardProps {
    data: {
        name: string
        amount: string
        category: Category
        type: 'deposit' | 'withdraw'
        date: string
    }
}

export function TransactionCard({ data }: TransactionCardProps) {
    return (
        <Card>
            <Title>{data.name}</Title>
            <Amount type={data.type}>{data.type === 'withdraw' && '- '}{data.amount}</Amount>
            <Footer>
                <Category>
                    <Icon name={data.category.icon || "dollar-sign"}/>
                    <Name>{data.category.name}</Name>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Card>
    )
}