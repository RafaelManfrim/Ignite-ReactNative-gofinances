import { ContentWrapper } from "./styles"

interface WrapperProps {
    children: React.ReactNode
}

export function Wrapper({ children }: WrapperProps) {
    return (
        <ContentWrapper>
            {children}
        </ContentWrapper>
    )
}