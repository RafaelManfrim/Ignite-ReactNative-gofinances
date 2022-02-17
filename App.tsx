import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { AppRoutes } from './src/routes/app.routes'
import { SignIn } from './src/pages/SignIn'

import { AuthContextProvider } from './src/contexts/AuthContext';

import theme from './src/global/styles/theme'

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
        <AuthContextProvider>
          <SignIn />
        </AuthContextProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}
