import React from 'react'
import { Flex, Box, IconButton } from 'theme-ui'

const List = ({ items = [], parentStyle, childStyle }) => {
  return (
    <Box
        as="ul"
        sx={{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            ...parentStyle
        }}
    >
        {items.map(({ icon, text }, i) => (
            <Flex as="li" key={i} sx={{ ...childStyle }} >
                <IconButton aria-label="list icon" sx={{ 
                    color: '#FFC059',
                    width: 'auto',
                    height: 'auto',
                    padding: 0,
                    fontSize: 30,
                    marginRight: 2
                 }}>
                    {icon}
                </IconButton>
                {text}
            </Flex>
        ))}
    </Box>
  )
}

export default List