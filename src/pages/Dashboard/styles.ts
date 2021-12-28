import styled from 'styled-components/native'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.background};
`;

const Title = styled.Text`
    color: ${({theme}) => theme.colors.attention};
    font-weight: bold;
    font-size: 32px;
    padding-bottom: 4px;
    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.colors.attention};
`;

export { Container, Title }