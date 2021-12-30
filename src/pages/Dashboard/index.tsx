import React from 'react'
import { StatusBar } from 'react-native'
import { Header } from '../../components/Header'
import { HighlightCard } from '../../components/HighlightCard'
import theme from '../../global/styles/theme'
import { Container, Content } from './styles'

export default function Dashboard() {
    return (
        <Container>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header />
            <Content>
                <HighlightCard title="Entradas" amount="R$ 1000,00" lastTransaction="Última entrada dia 13 de abril" type="deposit"/>
                <HighlightCard title="Saídas" amount="R$ 400,00" lastTransaction="Última saída dia 14 de junho" type="withdraw"/>
                <HighlightCard title="Total" amount="R$ 600,00" lastTransaction="01 a 16 de abril" type="total"/>
            </Content>
        </Container>
    )
}