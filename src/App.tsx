import { Box, Typography } from '@mui/material'
import { IndexStack, IndexLink } from './styles'
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
        <IndexLink href='#home'>Home</IndexLink>
        <IndexLink href='#about'>About</IndexLink>
        <IndexLink href='#contact'>Contact</IndexLink>
      </IndexStack>
      <Box id='home' mb={4}>
        <Home />
      </Box>
      <Box id='about' mb={4}>
        <About />
      </Box>
      <Box id='contact' mb={4}>
        <Contact />
      </Box>
    </Box>
  )
}

export default App
