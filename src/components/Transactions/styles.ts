import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { DataListProps } from '.'
import { FlatList, FlatListProps } from 'react-native';

const TransactionsArea = styled.View`
    flex: 68;
    padding: 0 28px;
    margin-top: ${RFPercentage(3)}px;
`

const TransactionsList = styled(FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>).attrs({
    showsVerticalScrollIndicator: false
})``

const Title = styled.Text`
    font-size: 18px;
    text-align: center;
    color: ${({theme}) => theme.colors.text}
    font-family: ${({theme}) => theme.fonts.medium};
    margin-bottom: ${RFValue(12)}px;
`

export { TransactionsArea, TransactionsList, Title }