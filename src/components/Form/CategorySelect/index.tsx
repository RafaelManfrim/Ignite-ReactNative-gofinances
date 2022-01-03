import { CatSelectContainer, Category, Icon } from './styles'

interface CatSelectProps {
    title: string
}

export function CategorySelect({ title }: CatSelectProps ) {
    return (
        <CatSelectContainer>
            <Category>{title}</Category>
            <Icon name="chevron-down" />
        </CatSelectContainer>
    )
}