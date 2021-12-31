import { TouchableOpacityProps } from 'react-native'
import { ButtonContainer, ButtonTitle } from './styles'

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest}: ButtonProps) {
    return (
        <ButtonContainer {...rest}>
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
}