import styled from 'styled-components/native'

const ContentWrapper = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`

export { ContentWrapper }