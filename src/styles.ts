import { Stack, Link } from '@mui/material'
import { styled } from '@mui/material/styles'

export const IndexStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}))

export const IndexLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#white',
  fontWeight: 500,
  fontSize: '1rem',
}))
