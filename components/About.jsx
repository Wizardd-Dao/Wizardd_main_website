import { Heading, Text, Flex, Image } from '@chakra-ui/react'

export default function About() {
    return (
        <Flex
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            height='100vh'
            color='white'
        >
            <Heading mb='2rem' >About Us</Heading>
            <Image src='Witch.svg' margin='-5' zIndex='2' />
            <Flex
                maxW='700'
                backdropFilter="blur(4px)"
                backgroundColor="rgba(255, 255, 255, 0.1)"
                borderRadius="md"
                boxShadow="md"
                padding='4'
                textAlign='center'
            >
                <Text>Wizardd is a startup focused on democratizing blockchain technology, with a special commitment to making technologies such as <Text as='span' fontWeight='bold'>Layer 2 solutions, NFTs, tokens</Text> and <Text as='span' fontWeight='bold'>decentralized finance (DeFi)</Text> more accessible and secure for everyone.</Text>
            </Flex>

            <Flex flexDir='column' gap='4' mt='5' >
                <Text fontSize='3xl' >The company operates on three main fronts:</Text>
                <Flex
                    maxW='610'
                    alignItems='center'
                    justifyContent='space-between'
                    backdropFilter="blur(4px)"
                    backgroundColor="rgba(255, 255, 255, 0.1)"
                    borderRadius="md"
                    boxShadow="md"
                    padding='4'
                >
                    <Image w={50} h={50} src='/potion_blue.svg' />
                    <Text fontWeight='bold' fontSize='2xl'>Software Development</Text>
                    <Image w={50} h={50} src='/code_image.svg' />
                </Flex>
                <Flex
                    maxW='610'
                    alignItems='center'
                    justifyContent='space-between'
                    backdropFilter="blur(4px)"
                    backgroundColor="rgba(255, 255, 255, 0.1)"
                    borderRadius="md"
                    boxShadow="md"
                    padding='4'
                >
                    <Image w={50} h={50} src='/potion_red.svg' />
                    <Text fontWeight='bold' fontSize='2xl'>Education</Text>
                    <Image w={50} h={50} src='/book_image.svg' />
                </Flex>
                <Flex
                    maxW='610'
                    alignItems='center'
                    justifyContent='space-between'
                    backdropFilter="blur(4px)"
                    backgroundColor="rgba(255, 255, 255, 0.1)"
                    borderRadius="md"
                    boxShadow="md"
                    padding='4'
                >
                    <Image w={50} h={50} src='/Pink_Potion.svg' />
                    <Text fontWeight='bold' fontSize='3xl'>Security</Text>
                    <Image w={50} h={50} src='/securityImage.svg' />
                </Flex>
            </Flex>
        </Flex >
    )
}