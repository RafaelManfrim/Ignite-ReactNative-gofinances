import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`

const Content = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 28, paddingRight: 0 },
    showsHorizontalScrollIndicator: false,
})`
    margin-top: -${RFValue(72)}px;
`

export { Container, Content }