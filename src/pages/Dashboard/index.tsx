import React from 'react'
import { StatusBar } from 'react-native'
import { HighlightCard } from '../../components/HighlightCard'
import theme from '../../global/styles/theme'
import { Container, Header, UserInfo, Profile, Avatar, User, Greatings, UserName, LogoutButton, Content } from './styles'

export default function Dashboard() {
    return (
        <Container>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header>
                <UserInfo>
                    <Profile>
                        <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/72226013?v=4' }} />
                        <User>
                            <Greatings>Olá,</Greatings>
                            <UserName>Rafael</UserName>
                        </User>
                    </Profile>
                    <LogoutButton name="power" />
                </UserInfo>
            </Header>
            <Content>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </Content>
        </Container>
    )
}