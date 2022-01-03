import { FlatList, StatusBar } from 'react-native'
import { Button } from '../../components/Form/Button'
import { Header } from '../../components/Header'
import { Wrapper } from '../../components/Wrapper'
import theme from '../../global/styles/theme'
import { categories } from '../../utils/categories'
import { Category, Icon, Label, Footer } from './styles'

type Category = {
    key: string
    name: string
}

interface CategorySelectProps {
    category: Category
    setCategory: (category: Category) => void
    closeSelectCategory: () => void
}

export function CategorySelect({ category, setCategory, closeSelectCategory }: CategorySelectProps){
    return (
        <Wrapper>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header title="Categorias" />
            <FlatList data={categories} keyExtractor={item => item.key} renderItem={({ item }) => (
                <Category onPress={() => setCategory(item)} isActive={category.key === item.key}>
                    <Icon name={item.icon} />
                    <Label>{item.name}</Label>
                </Category>
            )}/>
            <Footer>
                <Button title="Selecionar" onPress={closeSelectCategory}/>
            </Footer>
        </Wrapper>
    )
}