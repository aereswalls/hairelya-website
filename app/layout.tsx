// app/layout.tsx
import './globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../lib/theme'

export const metadata = {
  title: 'Hairelya - Your hair care ritual',
  description: 'L’app che trasforma la tua hair routine in un rituale semplice e motivante.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
