import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type HistoryCardContainerProps = {
    color: string
}

const HistoryCardContainer = styled.View<HistoryCardContainerProps>`
    background-color: ${({ theme }) => theme.colors.shape};
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 12px 24px;
    margin: 12px 28px 0;
    border-radius: 8px;
    border-left-width: 8px;
    border-color: ${({ color }) => color};
`

const HistoryCardTitle = styled.Text`
    font-size: ${RFValue(13)}px;
    font-weight: 600;
`

const HistoryCardAmount = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: 700;
`

export { HistoryCardContainer, HistoryCardTitle, HistoryCardAmount }

