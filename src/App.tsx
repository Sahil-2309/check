import { Box, Typography } from '@mui/material'
import { IndexStack, IndexLink, Index2Link } from './styles'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <Box p={2}>
      <Typography variant='h4' gutterBottom>
        MUI TS App
      </Typography>
      <IndexStack>
        <IndexLink href='#home' underline='none'>
          Home
        </IndexLink>
        <IndexLink href='#about'>About</IndexLink>
        <Index2Link href='#contact'>Contact</Index2Link>
      </IndexStack>
      <Box mb={4}>
        <Home />
      </Box>
      <Box mb={4}>
        <About />
      </Box>
      <Box mb={4}>
        <Contact />
      </Box>
    </Box>
  )
}

export default App
