import React from 'react'
import { Container, Header, Title, Icon, Content, Amount, LastTransaction } from './styles'

export function HighlightCard() {
    return (
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle" />
            </Header>
            <Content>
                <Amount>1000</Amount>
                <LastTransaction>02 de março</LastTransaction>
            </Content>
        </Container>
    )
}