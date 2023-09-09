import { Flex, Image, Heading, Button } from '@chakra-ui/react'
import SocialLinks from './SocialLinks'

export default function Presentation() {
    return (
        <Flex
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            height='88vh'
            color='white'
            gap={10}
        >
            <Heading color='white' >The Magic is about to begin...!</Heading>
            <Image src='magic_crystal_ball.svg' />
            <Heading as='h2'>In the world of technology, get ready for a <br /> amazing and totally magical journey.</Heading>
            <Button colorScheme='pink' >Contact</Button>
        </Flex>
    )
}