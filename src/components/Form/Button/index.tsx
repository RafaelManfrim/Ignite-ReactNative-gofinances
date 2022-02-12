import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler'
import { ButtonContainer, ButtonTitle } from './styles'

interface ButtonProps extends RectButtonProps {
    title: string
    onPress: () => void
}

export function Button({ title, onPress, ...rest}: ButtonProps) {
    return (
        <GestureHandlerRootView>
            <ButtonContainer onPress={onPress} {...rest}>
                <ButtonTitle>{title}</ButtonTitle>
            </ButtonContainer>
        </GestureHandlerRootView>
    )
}