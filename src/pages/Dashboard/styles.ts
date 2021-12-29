import styled from 'styled-components/native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`

const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({theme}) => theme.colors.primary};

    flex-direction: row;
    justify-content: center;
`

const HeaderContent = styled.View`
    width: 100%;
    padding: 0 28px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`   

const Profile = styled.View`
    flex-direction: row;
    align-items: center;
`

const Avatar = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 10px;
`

const User = styled.View`
    margin-left: 16px;
`

const Greatings = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(14)}px};
    font-family: ${({theme}) => theme.fonts.regular};
    line-height: ${RFValue(18)}px};
`

const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(14)}px};
    font-family: ${({theme}) => theme.fonts.bold};
    line-height: ${RFValue(18)}px};
`

const LogoutButton = styled(Feather)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(28)}px};
`

export { Container, Header, HeaderContent, Profile, Avatar, User, Greatings, UserName, LogoutButton }