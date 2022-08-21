import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import px2vw from '@/utils/px2vw'
import { useRouter } from 'next/router'
import gift from '@/assets/imgs/gift.png'
import galaxy from '@/assets/imgs/galaxy.png'
import galaxy2 from '@/assets/imgs/galaxy2.png'
import rightIcon from '@/assets/imgs/rightIcon.png'
import mintLogo from '@/assets/imgs/mintLogo.png'

function Index() {
  const router = useRouter()
  return (
    <Flex
      py={px2vw(40)}
      pl={px2vw(11)}
      pr={px2vw(12)}
      w="full"
      h="100vh"
      flexDir="column"
      bgColor="black.100"
      boxSizing="border-box"
    >
      {/* 顶部 */}
      <Flex pos="relative" bgColor="yellow.100" w={px2vw(350)} h={px2vw(250)} mb={px2vw(15)}>
        <Flex
          w="full"
          flexDir="column"
          transform="rotate(4deg)"
          border="5px solid"
          borderColor="black.100"
          bgColor="blue.300"
          zIndex={1}
        >
          <Flex w="full" alignItems="center" justifyContent="center" pos="relative" h={px2vw(72)}>
            <Image pos="absolute" src={gift} top={px2vw(-23)} left={0} />
            <Text
              fontSize={px2vw(21)}
              ml={px2vw(50)}
              mr={px2vw(4)}
              fontWeight="700"
              fontFamily="LoRes9OT"
              color="yellow.100"
            >
              FREEEE Birds
            </Text>
            <Text fontSize={px2vw(8)} fontWeight="700" fontFamily="LoRes9OT" color="white.100">
              why not?
            </Text>
          </Flex>
          <Flex
            h={px2vw(72)}
            px={px2vw(18)}
            w="full"
            bgColor="black.200"
            alignItems="center"
            justifyContent="space-between"
            pos="relative"
            boxSizing="border-box"
          >
            <Image src={galaxy} />
            <Flex flexDir="column" fontWeight="700" color="white.100" fontSize={px2vw(16)}>
              <Text>10 Stupid birds standing</Text>
              <Flex>
                <Text>in</Text>
                <Text color="blue.200" ml="5px">
                  project galaxy for FREE
                </Text>
              </Flex>
            </Flex>
            <Image src={rightIcon} />
          </Flex>
          <Flex
            mt={px2vw(24)}
            h={px2vw(72)}
            px={px2vw(18)}
            w="full"
            bgColor="black.200"
            alignItems="center"
            justifyContent="space-between"
            pos="relative"
            boxSizing="border-box"
          >
            <Image src={galaxy2} />
            <Flex flexDir="column" fontWeight="700" color="white.100" fontSize={px2vw(16)}>
              <Flex>
                <Text>And there are </Text>
                <Text color="blue.200" ml="5px">
                  10 More
                </Text>
              </Flex>
              <Text color="blue.200">in Gleam…</Text>
            </Flex>
            <Image src={rightIcon} />
          </Flex>
        </Flex>
      </Flex>
      {/* icon */}
      <Image w={px2vw(282)} h={px2vw(165)} mb={px2vw(32)} src={mintLogo} mx="auto" />
      {/* 文案 */}
      <Flex
        flexDir="column"
        alignItems="center"
        color="white.100"
        fontWeight="700"
        fontFamily="LoRes9OT"
        fontSize={px2vw(23)}
        lineHeight={px2vw(30)}
        mb={px2vw(40)}
      >
        <Text>There are also</Text>
        <Text color="pink.100">Endangered</Text>
        <Text color="pink.100">Birds Species</Text>
        <Text>They are expensive</Text>
        <Flex>
          <Text>for sale</Text>
          <Text fontSize={px2vw(8)} lineHeight={px2vw(33)}>
            (and loved by Tom){' '}
          </Text>
        </Flex>
      </Flex>
      {/* 按钮 */}
      <Flex
        w={px2vw(316)}
        h={px2vw(70)}
        mb={px2vw(15)}
        fontSize={px2vw(23)}
        fontWeight="700"
        fontFamily="LoRes9OT"
        color="black.100"
        bgColor="green.200"
        justifyContent="center"
        alignItems="center"
        mx="auto"
        onClick={() => router.push('/mint')}
      >
        CATCH THEM!!!
      </Flex>
      <Text fontSize={px2vw(8)} fontWeight="700" fontFamily="LoRes9OT" color="white.100" mx="auto">
        Shush… Don’t let the cops see
      </Text>
    </Flex>
  )
}

export default Index
