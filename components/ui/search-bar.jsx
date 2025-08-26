'use client'

import { 
  Box, 
  Input, 
  IconButton,
  VStack,
  Text,
  Flex
} from '@chakra-ui/react'
import { RiArrowUpLine } from 'react-icons/ri'

import { useState } from 'react'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [messages, setMessages] = useState([])

  const handleSearch = () => {
    if (!query.trim()) return
    
    const newMessage = {
      id: Date.now(),
      text: query
    }
    
    setMessages(prev => [...prev, newMessage])
    setQuery('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Box
      position="fixed"
      bottom={9}
      left={{ base: 4, md: '270px' }}
      right={4}
      zIndex={1000}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {messages.length > 0 && (
        <VStack
          spacing={2}
          mb={4}
          maxW="4xl"
          w="full"
          maxH="300px"
          overflowY="auto"
        >
          {messages.map((message) => (
            <Flex
              key={message.id}
              w="full"
              justify="flex-end"
              direction="column"
              align="flex-end"
            >
              <Box
                bg="green.500"
                color="white"
                p={3}
                borderRadius="2xl"
                borderBottomRightRadius="md"
                maxW="80%"
                wordBreak="break-word"
              >
                <Text>{message.text}</Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      )}
      
      <Box display="flex" gap={2} maxW="4xl" w="full" px={6}>
        <Input
          size='lg'
          placeholder="Ask your AI assistant..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleKeyPress}
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
          aria-label="Send"
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