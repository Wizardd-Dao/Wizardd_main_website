import { Button, Flex, Image } from '@chakra-ui/react'
import { LiaDiscord, LiaTelegramPlane, LiaInstagram } from 'react-icons/lia'

export default function Footer() {
    return (
        <Flex alignItems='center' justifyContent='center' gap='3' flexDir='column' >
            <Flex gap='4' >
                <Button>
                    <LiaTelegramPlane />
                </Button>
                <Button>
                    <LiaDiscord />
                </Button>
                <Button>
                    <LiaInstagram />
                </Button>
            </Flex>
        </Flex>
    )
}