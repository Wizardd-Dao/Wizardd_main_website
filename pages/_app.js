import { ChakraProvider, Flex, Box, Image } from '@chakra-ui/react';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex
        direction="column"
        align="center"
        justify="flex-start"
        bgImage="url('/gradient.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="3660px"
        w="100%"
        position="relative"
        zIndex={0}
        overflowX="hidden"
      >
        <Box zIndex={1}>
          <Header />
          <Component {...pageProps} />
          <SocialLinks />
        </Box>
      </Flex>
    </ChakraProvider >
  )
}

export default MyApp;