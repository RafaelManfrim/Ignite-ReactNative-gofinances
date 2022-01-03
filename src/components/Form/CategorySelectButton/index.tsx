import { CatSelectContainer, Category, Icon } from './styles'

interface CatSelectProps {
    title: string
    onPress: () => void
}

export function CategorySelectButton({ title, onPress }: CatSelectProps ) {
    return (
        <CatSelectContainer onPress={onPress}>
            <Category>{title}</Category>
            <Icon name="chevron-down" />
        </CatSelectContainer>
    )
}