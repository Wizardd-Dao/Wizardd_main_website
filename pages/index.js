import { Flex, Image } from '@chakra-ui/react'
import Presentation from '../components/Presentation'
import About from '../components/About'
import SoftwareDevSec from '../components/SoftwareDevSect'
import EducationDevSect from '../components/EducationSect'
import SecuritySec from '../components/SecuritySec'

export default function Home() {
  return (
    <div>
      <Presentation />
      <About />
      <SoftwareDevSec />
      <EducationDevSect />
      <SecuritySec />
      <Flex alignItems='center' justifyContent='center'>
        <Image src='wizardd_logo.svg' />
      </Flex>
    </div>
  )
}
