'use client'

import { AppBar, Button, Toolbar, Typography, Container, Grid, Paper } from '@mui/material'

export default function Home() {
  return (
    <main>
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <img src="/images/hairelya.png" alt="Hairelya Logo" height={32} />
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
    </main>
  )
}
