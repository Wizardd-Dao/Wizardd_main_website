import { Image, Text, Flex, Divider } from '@chakra-ui/react'

export default function SecuritySec() {
    return (
        <Flex maxW='1120px' margin='auto' height='100vh' justifyContent='center' mt='10' flexDir='column' gap='10' >
            <Flex alignItems='center' gap={4} justifyContent='center' >
                <Image src='Pink_Potion.svg' />
                <Text color='white' fontSize='2xl' fontWeight='bold'>Security</Text>
                <Image src='securityImage.svg' />
            </Flex>
            <Flex width='100%' gap='5rem' >
                <Flex flexDirection='column' maxW='600' border='1px solid white' padding='4' borderRadius='md' margin='auto' >
                    <Flex justifyContent='space-between' alignItems='center' mb={4}  >
                        <Text fontSize='xl' color='white'>Security Audit</Text>
                        <Image src='' />
                    </Flex>
                    <Divider mb='4' />
                    <Text color='white'>Wizardd provides security audit services for smart contracts and De-Fi applications. This is crucial to ensure the safety of users' assets and the integrity of the applications.</Text>
                </Flex>
            </Flex>
            <Flex flexDir={['column', 'column', 'column', 'row']} gap={['0', '0', '0', '4']} >
                <Flex flexDirection='column' maxW='600' border='1px solid white' padding='4' borderRadius='md' flex='1' mb='8' >
                    <Flex justifyContent='space-between' alignItems='center' mb={4} >
                        <Text fontSize='xl' color='white'>Audit Report</Text>
                        <Image src='' />
                    </Flex>
                    <Divider mb='4' />
                    <Text color='white'>After the audit is completed, Wizardd provides a detailed report that includes all identified vulnerabilities, their severity, recommendations for fixing them, and an overall assessment of the application's security.</Text>
                </Flex>
                <Flex flexDirection='column' maxW='600' border='1px solid white' padding='4' borderRadius='md' flex='1' >
                    <Flex justifyContent='space-between' alignItems='center' mb={4} >
                        <Text fontSize='xl' color='white'>Post-Audit Support</Text>
                        <Image src='' />
                    </Flex>
                    <Divider mb='4' />
                    <Text color='white'>Wizardd provides ongoing support after the audit to help developers implement the recommended fixes and ensure the application is fully secure before being launched.</Text>
                </Flex>
            </Flex >

        </Flex >
    )
}