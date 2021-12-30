import React from 'react'
import { Container, Header, Title, Icon, Content, Amount, LastTransaction } from './styles'

interface CardProps {
    title: string
    amount: string
    lastTransaction: string
    type: 'deposit' | 'withdraw' | 'total'
}

const icon = {
    deposit: "arrow-up-circle",
    withdraw: "arrow-down-circle",
    total: "dollar-sign"
}

export function HighlightCard({ title, amount, lastTransaction, type }: CardProps) {

    return (
        <Container type={type} amount={600}>
            <Header>
                <Title type={type}>{title}</Title>
                <Icon name={icon[type]} type={type} />
            </Header>
            <Content>
                <Amount type={type}>{amount}</Amount>
                <LastTransaction type={type}>{lastTransaction}</LastTransaction>
            </Content>
        </Container>
    )
}