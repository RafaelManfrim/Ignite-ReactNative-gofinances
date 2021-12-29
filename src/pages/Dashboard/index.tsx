import React from 'react'
import { StatusBar } from 'react-native'
import theme from '../../global/styles/theme'
import { Container, Header, HeaderContent, Profile, Avatar, User, Greatings, UserName, LogoutButton } from './styles'

export default function Dashboard() {
    return (
        <Container>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header>
                <HeaderContent>
                    <Profile>
                        <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/72226013?v=4' }} />
                        <User>
                            <Greatings>Olá,</Greatings>
                            <UserName>Rafael</UserName>
                        </User>
                    </Profile>
                    <LogoutButton name="power" />
                </HeaderContent>
            </Header>
        </Container>
    )
}