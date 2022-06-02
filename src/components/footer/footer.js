import React from 'react'
import { jsx, Box, Text, Container } from 'theme-ui'
import { Link } from 'components/link'
import Logo from 'components/logo'

const Footer = () => {
  return (
    <footer sx={{
        variant: 'layout.footer',
        backgroundColor: '#fff',
    }}>
        <Container sx={{
            variant: 'layout.toolbar',
            justifyContent: ['center','null','null','space-between'],
            flexDirection: ['column','null','null','row'],
            paddingTop: [30, 40],
            paddingBottom: [30, 65],
        }}>

        </Container>

    </footer>
  )
}

export default Footer