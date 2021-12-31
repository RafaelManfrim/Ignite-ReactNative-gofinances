import { TouchableOpacityProps } from "react-native";
import { TransactionTypeContainer, Icon, Title } from "./styles";

interface TransactionTypeButtonProps extends TouchableOpacityProps {
    title: string;
    type: 'deposit' | 'withdraw'
    isActive: boolean
}

const icon = {
    deposit: "arrow-up-circle",
    withdraw: "arrow-down-circle",
}

export function TransactionTypeButton({ title, type, isActive, ...rest }: TransactionTypeButtonProps) {
    return (
        <TransactionTypeContainer isActive={isActive} type={type} {...rest}>
            <Icon name={icon[type]} type={type} />
            <Title>{title}</Title>
        </TransactionTypeContainer>
    )
}