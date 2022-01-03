import React from 'react'
import { StatusBar } from 'react-native'
import { Wrapper } from '../../components/Wrapper'
import { Header } from '../../components/Header'
import { HighlightCard } from '../../components/HighlightCard'
import { Transactions } from '../../components/Transactions'
import theme from '../../global/styles/theme'
import { Cards } from './styles'

export default function Dashboard() {
    return (
        <Wrapper>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header dashboardHeader />
            <Cards>
                <HighlightCard title="Entradas" amount="R$ 1000,00" lastTransaction="Última entrada dia 13 de abril" type="deposit"/>
                <HighlightCard title="Saídas" amount="R$ 400,00" lastTransaction="Última saída dia 14 de junho" type="withdraw"/>
                <HighlightCard title="Total" amount="R$ 600,00" lastTransaction="01 a 16 de abril" type="total"/>
            </Cards>
            <Transactions />
        </Wrapper>
    )
}