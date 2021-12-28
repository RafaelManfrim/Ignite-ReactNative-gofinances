import React from 'react';
import { ThemeProvider } from 'styled-components'
import Dashboard from './src/pages/Dashboard';
import theme from './src/global/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}
