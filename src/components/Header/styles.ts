import styled from 'styled-components/native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

const HeaderContainer = styled.View`
    width: 100%;
    height: ${RFPercentage(28)}px;
    padding-top: ${RFValue(28)}px;
    background-color: ${({theme}) => theme.colors.primary};
    flex-direction: column;
    justify-content: flex-start;
`

const UserInfo = styled.View`
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
    font-size: ${RFValue(15)}px};
    font-family: ${({theme}) => theme.fonts.regular};
    line-height: ${RFValue(22)}px};
`

const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(16)}px};
    font-family: ${({theme}) => theme.fonts.bold};
    line-height: ${RFValue(18)}px};
`

const LogoutButton = styled(Feather)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(32)}px;
`

export { HeaderContainer, UserInfo, Profile, Avatar, User, Greatings, UserName, LogoutButton }