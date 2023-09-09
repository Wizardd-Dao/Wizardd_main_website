import { Flex, Image } from '@chakra-ui/react'
import SocialLinks from './SocialLinks'

export default function Header() {
    return (
        <Flex alignItems='center' justifyContent='center' flexDir='column' >
            <Image src='wizardd_logo.svg' />
            <SocialLinks />
        </Flex>
    )
};