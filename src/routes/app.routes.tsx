import { Platform, TouchableHighlight } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'
import Dashboard from '../pages/Dashboard'
import TransactionRegister from '../pages/TransactionRegister'

import { BorderlessButton, GestureHandlerRootView } from 'react-native-gesture-handler'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
    const theme = useTheme()

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.text,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
                height: 70,
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            },
            tabBarButton: props => <TouchableHighlight {...props} activeOpacity={0.8} underlayColor="#f5f5f5" />
        }}>
            <Screen name='Listagem' component={Dashboard} options={{
                tabBarIcon: ({size, color}) => <MaterialIcons name='format-list-bulleted' size={size} color={color}/>
            }}/>
            <Screen name='Cadastrar' component={TransactionRegister} options={{
                tabBarIcon: ({size, color}) => <MaterialIcons name='attach-money' size={size} color={color}/>
            }}/>
            <Screen name='Resumo' component={TransactionRegister} options={{
                tabBarIcon: ({size, color}) => <MaterialIcons name='pie-chart' size={size} color={color}/>
            }}/>
        </Navigator>
    )
}