import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import theme from './src/global/styles/theme'
import Dashboard from './src/pages/Dashboard'
import { TransactionRegister } from './src/pages/TransactionRegister'
import { CategorySelect } from './src/pages/CategorySelect'

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
      <TransactionRegister />
    </ThemeProvider>
  )
}
