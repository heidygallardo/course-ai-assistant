'use client'

import { 
  Box, 
  VStack, 
  HStack, 
  Text, 
  Button,
  Heading,
  Stack,
  IconButton,
} from '@chakra-ui/react'
import { Tooltip } from '../ui/tooltip'
import { toaster } from '../ui/toaster'
import { RiVideoLine, RiFileCopyLine, RiExternalLinkLine } from 'react-icons/ri'

const sampleZoomLinks = [
  {
    id: 1,
    title: 'TIP 102 Section 1B',
    instructor: 'Prof. Johnson',
    url: 'https://zoom.us/j/1234567890',
    meetingId: '123 456 7890',
    time: 'Tue, Thu, 5:00 PM CST'
  },
  {
    id: 2,
    title: 'TIP 102 Section 3B',
    instructor: 'Dr. Smith',
    url: 'https://zoom.us/j/0987654321',
    meetingId: '098 765 4321',
    time: 'Tue, Thu, 7:00 PM CST'
  },

]

export function ZoomLinks() {
  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text)
      toaster.create({
        title: `${label} copied!`,
        status: 'success',
        duration: 2000,
      })
    } catch (err) {
      toaster.create({
        title: 'Failed to copy',
        status: 'error',
        duration: 2000,
      })
    }
  }

  const openZoomLink = (url) => {
    window.open(url, '_blank')
  }

  return (
    <Box>
      <Heading size="lg" mb={6} color="gray.800">
        Zoom Links
      </Heading>
      
      <VStack spacing={4} align="stretch">
        {sampleZoomLinks.map((meeting) => (
          <Box 
            key={meeting.id} 
            p={6} 
            borderWidth="1px" 
            borderRadius="lg" 
            bg="white"
            shadow="sm"
          >
              <Stack spacing={4}>
                <VStack align="start" spacing={1}>
                  <HStack>
                    <RiVideoLine color="blue" />
                    <Text fontWeight="bold" fontSize="md">
                      {meeting.title}
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.600">
                    {meeting.instructor} • {meeting.time}
                  </Text>
                </VStack>
                
                <VStack spacing={2} align="stretch">
                  <HStack justify="space-between">
                    <Text fontSize="sm" fontFamily="mono" color="gray.700">
                      Meeting ID: {meeting.meetingId}
                    </Text>
                    <Tooltip content="Copy meeting ID" showArrow openDelay={0} closeDelay={0}>
                      <IconButton
                        size="sm"
                        variant="ghost"
                        aria-label="Copy meeting ID"
                        onClick={() => copyToClipboard(meeting.meetingId, 'Meeting ID')}
                      >
                        <RiFileCopyLine />
                      </IconButton>
                    </Tooltip>
                  </HStack>
                  
                  <HStack justify="space-between">
                    <Text fontSize="sm" fontFamily="mono" color="gray.700" noOfLines={1}>
                      {meeting.url}
                    </Text>
                    <HStack spacing={1}>
                      <Tooltip content="Copy zoom link" showArrow>
                        <IconButton
                          size="sm"
                          variant="ghost"
                          aria-label="Copy zoom link"
                          onClick={() => copyToClipboard(meeting.url, 'Zoom link')}
                        >
                          <RiFileCopyLine />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Open zoom link" showArrow>
                        <IconButton
                          size="sm"
                          variant="ghost"
                          aria-label="Open zoom link"
                          onClick={() => openZoomLink(meeting.url)}
                        >
                          <RiExternalLinkLine />
                        </IconButton>
                      </Tooltip>
                    </HStack>
                  </HStack>
                </VStack>
                
                <Button
                  colorScheme="blue"
                  size="sm"
                  onClick={() => openZoomLink(meeting.url)}
                >
                  <RiVideoLine style={{ marginRight: '8px' }} />
                  Join Meeting
                </Button>
              </Stack>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}