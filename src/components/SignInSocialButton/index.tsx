import { GestureHandlerRootView, RectButtonProps } from "react-native-gesture-handler"
import { SvgProps } from "react-native-svg"

import { Button, ImageContainer, SignInSocialButtonText } from './styles'

interface SignInSocialButtonProps extends RectButtonProps {
    title: string
    svg: React.FC<SvgProps>
}

export function SignInSocialButton({ title, svg: Svg, ...rest }: SignInSocialButtonProps) {
    return (
        <GestureHandlerRootView>
            <Button {...rest}>
                <ImageContainer>
                    <Svg />
                </ImageContainer>

                <SignInSocialButtonText>
                    {title}
                </SignInSocialButtonText>
            </Button>
        </GestureHandlerRootView>
    )
}