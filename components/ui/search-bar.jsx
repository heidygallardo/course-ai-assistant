'use client'

import { 
  Box, 
  Input, 
  IconButton,
  Group
} from '@chakra-ui/react'
import { RiArrowUpLine } from 'react-icons/ri'

import { useState } from 'react'

export function SearchBar() {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    console.log('Searching for:', query)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Box
      position="fixed"
      bottom={4}
      left={{ base: 4, md: '270px' }}
      right={4}
      zIndex={1000}
      display="flex"
      justifyContent="center"
    >
      <Box display="flex" gap={2} maxW="4xl" w="full" px={6}>
        <Input
          placeholder="Ask your AI assistant..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          bg="white"
          borderRadius="full"
          shadow="lg"
          border="1px solid"
          borderColor="gray.200"
          _focus={{
            borderColor: 'blue.400',
            shadow: 'xl'
          }}
          flex={1}
        />
        <IconButton
          aria-label="Search"
          onClick={handleSearch}
          variant="ghost"
          borderRadius="full"
          colorScheme="blue"
        >
          <RiArrowUpLine />
        </IconButton>
      </Box>
    </Box>
  )
}