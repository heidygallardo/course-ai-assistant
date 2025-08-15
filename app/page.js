import { Box, Heading, VStack } from "@chakra-ui/react";
import { MainLayout } from "../components/layout/main-layout";
import { ZoomLinks } from "../components/features/zoom-links";
import { SearchBar } from "../components/ui/search-bar";

export default function Home() {
  return (
    <MainLayout>
      <Box minH="100vh" pb="100px" display="flex" justifyContent="center">
        <Box maxW="4xl" w="full" px={6}>
          <VStack spacing={8} align="stretch">
            <Box pt={6}>
              <Heading size="2xl" color="gray.800" mt={3} mb={3} textAlign="center">
                Welcome to Fellow AI Assistant
              </Heading>
            </Box>
            
            <ZoomLinks />
          </VStack>
        </Box>
        
        <SearchBar />
      </Box>
    </MainLayout>
  );
}
