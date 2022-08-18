import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import loginBg from '@/assets/imgs/loginBg.png'
import connectWallet from '@/assets/imgs/connectWallet.png'
import px2vw from '@/utils/px2vw'
import { useRouter } from 'next/router'

function Index() {
  const router = useRouter()
  return (
    <Flex
      bgImage={loginBg}
      w="full"
      h="100vh"
      flexDir="column"
      justifyContent="flex-end"
      bgRepeat="no-repeat"
      bgSize="100%"
      bgPos="center"
    >
      <Image
        mx="auto"
        src={connectWallet}
        mb={px2vw(215)}
        onClick={() => router.push('/account')}
      />
    </Flex>
  )
}

export default Index
