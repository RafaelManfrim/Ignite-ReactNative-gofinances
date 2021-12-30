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
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </Content>
        </Container>
    )
}