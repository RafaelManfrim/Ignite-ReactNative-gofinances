import { HistoryCardContainer, HistoryCardTitle, HistoryCardAmount } from "./styles";

interface HistoryCardProps {
    color: string
    title: string
    amount: number
}

export function HistoryCard({ color, title, amount }: HistoryCardProps) {
    return (
        <HistoryCardContainer color={color}>
            <HistoryCardTitle>{title}</HistoryCardTitle>
            <HistoryCardAmount>
                {amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}).replace('R$', 'R$ ')}
            </HistoryCardAmount>
        </HistoryCardContainer>
    )
}