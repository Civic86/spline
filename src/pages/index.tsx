'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Box,
} from '@chakra-ui/react'

import Nav from '@/components/header'
import Pricing from '@/components/price'
import Footer from '@/components/footer'
import Form from '@/components/form'

export default function CallToActionWithIllustration() {
  return (
    <Box>
      <header>
        <Nav />
      </header>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Learn Weather{' '}
            <Text as={'span'} color={'green.400'}>
              with Pokemon
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Good perfect weather app for you to learn about the weather with Pokemon.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}>
              Get started
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
        </Stack>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.54/build/spline-viewer.js"></script>
        {/* <spline-viewer url="https://prod.spline.design/uqKV1K5Be7Pt2ItV/scene.splinecode"></spline-viewer> */}
        <Pricing/>
        <Box alignContent="center" justifyContent="center">
          <Form />
        </Box>
      </Container>
      <footer>
        <Footer />
      </footer>
    </Box>
  )
}
