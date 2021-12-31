import { HeaderContainer, UserInfo, Profile, Avatar, User, Greatings, UserName, LogoutButton, HeaderTitle } from './styles'

interface HeaderProps {
    dashboardHeader?: boolean
    headerTitle?: string 
}

export function Header({ dashboardHeader = false, headerTitle }: HeaderProps) {
    return (
        <HeaderContainer size={dashboardHeader ? 28 : 14}>
            {dashboardHeader ? (
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
            ) : (
                <HeaderTitle>{headerTitle}</HeaderTitle>
            )}
        </HeaderContainer>
    )
}