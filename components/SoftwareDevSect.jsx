import { Image, Text, Flex, Divider } from '@chakra-ui/react'

export default function SoftwareDevSec() {
    return (
        <Flex maxW='1120px' margin='auto' height='100vh' justifyContent='center' mt='10' flexDir='column' gap='10' >
            <Flex alignItems='center' gap={4} justifyContent='center' >
                <Image src='potion_blue.svg' />
                <Text color='white' fontSize='2xl' fontWeight='bold'>Software Development</Text>
            </Flex>
            <Flex width='100%' gap='5rem' >
                <Flex flexDirection='column' maxW='600' border='1px solid white' padding='4' borderRadius='md' margin='auto' >
                    <Flex justifyContent='space-between' alignItems='center' mb={4}  >
                        <Text fontSize='xl' color='white'>Consulting Services</Text>
                    </Flex>
                    <Divider mb='4' />
                    <Text color='white'>Wizardd offers consulting services for companies and developers who want to implement Layer 2 solutions, NFTs, tokens and DeFi, but need expert guidance and support.</Text>
                </Flex>
            </Flex>
            <Flex gap='5rem' >
                <Flex flexDirection='column' maxW='600' border='1px solid white' padding='4' borderRadius='md' flex='1' >
                    <Flex justifyContent='space-between' alignItems='center' mb={4} >
                        <Text fontSize='xl' color='white'>Tokens</Text>
                    </Flex>
                    <Divider mb='4' />
                    <Text color='white'>Wizardd supports the development of fungible tokens, which are interchangeable and have the same value. This includes the creation of ERC-20, ERC-721, ERC-1155 and other token standards.</Text>
                </Flex>
                <Flex flexDirection='column' maxW='600' border='1px solid white' padding='4' borderRadius='md' flex='1' >
                    <Flex justifyContent='space-between' alignItems='center' mb={4} >
                        <Text fontSize='xl' color='white'>De-Fi</Text>
                    </Flex>
                    <Divider mb='4' />
                    <Text color='white'>Wizardd supports the development of decentralized finance (DeFi) applications, which allow users to lend, borrow and trade crypto assets without intermediaries. This includes the creation of lending protocols, decentralized exchange (DEX) platforms and liquidity pools.</Text>
                </Flex>
            </Flex>

        </Flex>
    )
}