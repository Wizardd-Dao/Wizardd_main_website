import { Image, Text, Flex, Divider } from '@chakra-ui/react'

export default function EducationDevSect() {
    return (
        <Flex maxW='1120px' margin='auto' height='100vh' justifyContent='center' mt='28' flexDir='column' gap='10' >
            <Flex alignItems='center' gap={4} justifyContent='center' >
                <Image src='potion_red.svg' />
                <Text color='white' fontSize='2xl' fontWeight='bold'>Education</Text>
                <Image src='book_image.svg' />
            </Flex>
            <Flex width='100%' gap='5rem' >
                <Flex flexDirection='column' maxW='600' border='1px solid white' padding='4' borderRadius='md' margin='auto' >
                    <Flex justifyContent='space-between' alignItems='center' mb={4}  >
                        <Text fontSize='xl' color='white'>Content Creation</Text>
                        <Image src='' />
                    </Flex>
                    <Divider mb='4' />
                    <Text color='white'>Wizardd develops comprehensive educational content that covers the basics of blockchain, the importance of Layer 2 solutions, NFTs, tokens, DeFi, and detailed guides on rollups. This content will be available in the form of articles, webinars, and free courses.</Text>
                </Flex>
            </Flex>
            <Flex flexDir={['column', 'column', 'column', 'row']} gap={['0', '0', '0', '4']} >
                <Flex flexDirection='column' maxW='600' border='1px solid white' padding='4' borderRadius='md' flex='1' mb='10' >
                    <Flex justifyContent='space-between' alignItems='center' mb={4} >
                        <Text fontSize='xl' color='white'>Workshops and Training</Text>
                        <Image src='' />
                    </Flex>
                    <Divider mb='4' />
                    <Text color='white'>The company organizes workshops and training sessions for developers, companies, enthusiasts, and students from public and private universities who want to understand and work with Layer 2 rollups, NFTs, tokens, and DeFi.</Text>
                </Flex>
                <Flex flexDirection='column' maxW='600' border='1px solid white' padding='4' borderRadius='md' flex='1' >
                    <Flex justifyContent='space-between' alignItems='center' mb={4} >
                        <Text fontSize='xl' color='white'>Partnerships with Universities</Text>
                        <Image src='' />
                    </Flex>
                    <Divider mb='4' />
                    <Text color='white'>Wizardd intends to establish partnerships with public and private universities to offer education and training programs in blockchain, Layer 2 networks, tokens, and DeFi. This may include offering scholarships, organizing hackathons, and creating research and development laboratories.</Text>
                </Flex>
            </Flex>

        </Flex>
    )
}