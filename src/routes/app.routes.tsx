import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../pages/Dashboard'
import TransactionRegister from '../pages/TransactionRegister'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
    return (
        <Navigator>
            <Screen name='Listagem' component={Dashboard} />
            <Screen name='Cadastrar' component={TransactionRegister} />
            <Screen name='Resumo' component={TransactionRegister} />
        </Navigator>
    )
}