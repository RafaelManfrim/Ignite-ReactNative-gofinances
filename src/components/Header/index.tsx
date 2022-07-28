import { useAuth } from '../../contexts/AuthContext'
import { HeaderContainer, UserInfo, Profile, Avatar, User, Greatings, UserName, LogoutButton, Icon, HeaderTitle } from './styles'

interface HeaderProps {
    dashboardHeader?: boolean
    title?: string
}

export function Header({ dashboardHeader = false, title }: HeaderProps) {
    const { user, signOut } = useAuth()

    return (
        <HeaderContainer size={dashboardHeader ? 28 : 14}>
            {dashboardHeader ? (
                <UserInfo>
                    <Profile>
                        <Avatar source={{ uri: user.photo }} />
                        <User>
                            <Greatings>Olá,</Greatings>
                            <UserName>{user.name}</UserName>
                        </User>
                    </Profile>
                    <LogoutButton onPress={signOut}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserInfo>
            ) : (
                <HeaderTitle>{title}</HeaderTitle>
            )}
        </HeaderContainer>
    )
}