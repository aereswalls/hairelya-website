// app/page.tsx
'use client'

import { Button, Typography, AppBar, Toolbar, Switch, Container, Grid, Paper } from '@mui/material'
import { useState } from 'react'

export default function Home() {
  const [dark, setDark] = useState(false)

  return (
    <main>
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <img src="/images/hairelya.png" alt="Logo Hairelya" height={32} />
          <div>
            <Button href="/feed" color="inherit">Blog</Button>
            <Button href="/aboutus" color="inherit">Chi siamo</Button>
            <Button href="/support" color="inherit">Contatti</Button>
          </div>
        </Toolbar>
      </AppBar>

      <header className="bg-gradient-to-b from-[#a47864] to-[#c69d8f] text-white py-16 text-center">
        <Typography variant="h5" fontWeight={500}>
          L’app che trasforma la tua hair routine in un rituale semplice e motivante.
        </Typography>
      </header>

      <Container sx={{ py: 8 }}>
        <Typography variant="h6" align="center" gutterBottom>✨ Funzionalità principali</Typography>
        <Grid container spacing={4}>
          {[
            ['Profilazione capelli', 'Scopri la tua tipologia di capello e personalizza la tua routine.'],
            ['Routine smart', 'Promemoria, pianificazione, consigli e progressi visibili.'],
            ['Diario e prodotti', 'Annota trattamenti e valuta i prodotti usati nel tempo.'],
            ['Grafici e motivazione', 'Rendi visibile il progresso con grafici e obiettivi motivazionali.']
          ].map(([title, desc]) => (
            <Grid item xs={12} sm={6} key={title}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="subtitle1" fontWeight={600}>{title}</Typography>
                <Typography variant="body2">{desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <section className="bg-gradient-to-b from-[#fff4ec] to-[#f9e3d5] py-16 text-center">
        <Typography variant="h6" gutterBottom>📲 Uno sguardo all'app</Typography>
        <div className="flex overflow-x-auto gap-4 px-4 justify-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={`/images/app-mockup-${i}.png`}
              className="rounded-xl w-40 sm:w-52"
              alt={`Mockup ${i}`}
            />
          ))}
        </div>
        <div className="mt-6">
          <Button variant="contained" color="primary" href="https://apps.apple.com/it/app/" target="_blank">
            Scarica su App Store
          </Button>
        </div>
      </section>

      <footer className="bg-gradient-to-t from-[#f9e3d5] to-[#fff4ec] py-8 text-center text-[#a47864]">
        <div className="mb-2">
          <Button href="/privacy" color="inherit">Privacy</Button> | 
          <Button href="/support" color="inherit">Contatti</Button> | 
          <Button href="/aboutus" color="inherit">Chi siamo</Button>
        </div>
        <div className="mt-2">
          <Typography variant="body2">© 2025 hairelya</Typography>
        </div>
      </footer>
    </main>
  )
}
