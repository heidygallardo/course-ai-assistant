'use client'

import { Box, Flex } from '@chakra-ui/react'
import { Sidebar } from '../ui/sidebar'

export function MainLayout({ children }) {
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Box 
        ml={{ base: 0, md: '250px' }} 
        w="full"
        position="relative"
      >
        {children}
      </Box>
    </Flex>
  )
}