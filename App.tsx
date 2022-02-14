import { ThemeProvider } from 'styled-components'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import theme from './src/global/styles/theme'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes' 
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor={theme.colors.primary} />
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}
