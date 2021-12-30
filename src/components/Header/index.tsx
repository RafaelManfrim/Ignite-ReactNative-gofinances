import { HeaderContainer, UserInfo, Profile, Avatar, User, Greatings, UserName, LogoutButton } from './styles'

export function Header() {
    return (
        <HeaderContainer>
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
        </HeaderContainer>
    )
}