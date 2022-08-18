import React, { useState } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import blueBg from '@/assets/imgs/blueBg.png'
import line from '@/assets/imgs/line.png'
import check from '@/assets/imgs/check.png'
import reciptBg from '@/assets/imgs/reciptBg.png'
import mint1 from '@/assets/imgs/mint1.png'
import mint2 from '@/assets/imgs/mint2.png'
import play1 from '@/assets/imgs/play1.png'
import play2 from '@/assets/imgs/play2.png'
import leaderBoard from '@/assets/imgs/leaderBoard.png'
import px2vw from '@/utils/px2vw'
import { useRouter } from 'next/router'

function Index() {
  const router = useRouter()
  const [currentAvailable] = useState(8)
  return (
    <Flex
      bgImage={blueBg}
      px={px2vw(10)}
      py={px2vw(30)}
      w="full"
      minH="100vh"
      flexDir="column"
      justifyContent="space-between"
      bgRepeat="no-repeat"
      bgSize="100%"
      bgPos="center"
      boxSizing="border-box"
    >
      {/* 链接版块 */}
      <Flex
        w={px2vw(350)}
        h={px2vw(100)}
        px={px2vw(10)}
        py={px2vw(15)}
        mb={px2vw(45)}
        flexDir="column"
        bgColor="yellow.100"
        border="3px solid"
        borderColor="black"
        boxSizing="border-box"
      >
        <Flex justifyContent="space-between" mb={px2vw(8)}>
          <Text fontSize={px2vw(21)} color="black">
            CONNECTED
          </Text>
          <Image src={line} w={px2vw(134)} h={px2vw(3)} my="auto" />
          <Image src={check} w={px2vw(40)} h={px2vw(20)} my="auto" />
        </Flex>
        {/* 钱包地址 */}
        <Flex
          w={px2vw(317)}
          h={px2vw(35)}
          mx="auto"
          justifyContent="center"
          alignItems="center"
          pos="relative"
          _after={{
            content: '""',
            w: '100%',
            h: '100%',
            pos: 'absolute',
            top: '0',
            left: '0',
            bgColor: 'black',
            opacity: '0.1',
          }}
        >
          <Box
            w={px2vw(3)}
            h={px2vw(3)}
            zIndex="1"
            pos="absolute"
            bgColor="yellow.100"
            top="0"
            left="0"
          />
          <Box
            w={px2vw(3)}
            h={px2vw(3)}
            zIndex="1"
            pos="absolute"
            bgColor="yellow.100"
            top="0"
            right="0"
          />
          <Box
            w={px2vw(3)}
            h={px2vw(3)}
            zIndex="1"
            pos="absolute"
            bgColor="yellow.100"
            bottom="0"
            left="0"
          />
          <Box
            w={px2vw(3)}
            h={px2vw(3)}
            zIndex="1"
            pos="absolute"
            bgColor="yellow.100"
            bottom="0"
            right="0"
          />
          <Text color="black">0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06</Text>
        </Flex>
      </Flex>
      {/* 卡片 */}
      <Flex
        w={px2vw(350)}
        pl={px2vw(26)}
        pr={px2vw(17)}
        mb={px2vw(50)}
        h="450px"
        bgImage={reciptBg}
        bgSize="100%"
        bgRepeat="no-repeat"
        bgPos="top"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mx="auto"
        boxSizing="border-box"
      >
        {/* title */}
        <Flex flexDir="column" mb={px2vw(10)}>
          <Text color="black" fontSize={px2vw(37)} lineHeight={px2vw(37)} mb={px2vw(8)}>
            RECIPT
          </Text>
          <Box w="full" h={px2vw(6)} bgColor="black" />
        </Flex>
        {/* 分割线 */}
        <Box w="full" h={px2vw(1)} borderBottom="1px dashed" borderColor="black" />
        {/* current */}
        <Flex
          w="full"
          pl={px2vw(20)}
          pr={px2vw(15)}
          my={px2vw(10)}
          alignItems="center"
          boxSizing="border-box"
          justifyContent="space-between"
        >
          <Flex w={px2vw(128)}>
            <Text fontSize={px2vw(21)} lineHeight={px2vw(22)} color="black">
              Current Available:
            </Text>
          </Flex>
          <Text fontSize={px2vw(32)} lineHeight={px2vw(42)} color="black">
            {currentAvailable}
          </Text>
          <Text
            w={px2vw(95)}
            fontSize={px2vw(18)}
            lineHeight={px2vw(24)}
            textAlign="right"
            color="black"
          >
            Birds
          </Text>
        </Flex>
        {/* 分割线 */}
        <Box w="full" h={px2vw(1)} borderBottom="1px dashed" borderColor="black" />
        {/* info */}
        <Flex
          w="full"
          pl={px2vw(20)}
          pr={px2vw(15)}
          my={px2vw(10)}
          flexDir="column"
          boxSizing="border-box"
        >
          {/* used */}
          <Flex mb={px2vw(15)} alignItems="center" justifyContent="space-between">
            <Flex w={px2vw(128)} flexDir="column">
              <Text fontSize={px2vw(21)} lineHeight={px2vw(22)} color="black">
                Used:
              </Text>
              <Text fontSize={px2vw(11)} lineHeight={px2vw(11)} mt={px2vw(5)} color="black">
                Highest score:
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Text fontSize={px2vw(28)} lineHeight={px2vw(37)} color="black" textAlign="center">
                5
              </Text>
              <Flex
                w={px2vw(43)}
                h={px2vw(13)}
                justifyContent="center"
                alignItems="center"
                bgColor="black"
              >
                <Text fontSize={px2vw(11)} lineHeight={px2vw(11)} color="white.100">
                  16
                </Text>
              </Flex>
            </Flex>
            <Text
              w={px2vw(95)}
              fontSize={px2vw(18)}
              lineHeight={px2vw(24)}
              textAlign="right"
              color="black"
            >
              Birds
            </Text>
          </Flex>
          {/* Total */}
          <Flex alignItems="center" justifyContent="space-between">
            <Flex w={px2vw(128)}>
              <Text fontSize={px2vw(21)} lineHeight={px2vw(22)} color="black">
                Total:
              </Text>
            </Flex>
            <Text fontSize={px2vw(28)} lineHeight={px2vw(37)} color="black">
              13
            </Text>
            <Text
              w={px2vw(95)}
              fontSize={px2vw(18)}
              lineHeight={px2vw(24)}
              textAlign="right"
              color="black"
            >
              Birds
            </Text>
          </Flex>
        </Flex>
        {/* 分割线 */}
        <Box w="full" h={px2vw(1)} borderBottom="1px dashed" borderColor="black" />
        {/* noted */}
        <Flex mt={px2vw(15)} w="full" justifyContent="center">
          <Text color="black">NOTED: You will spend 1 x Tom Bird NFT to play game</Text>
        </Flex>
        {/* button */}
        <Image mt={px2vw(13)} src={currentAvailable > 0 ? mint1 : mint2} w="full" />
      </Flex>
      {/* 底部 */}
      <Flex justifyContent="center">
        <Flex
          w={px2vw(76)}
          h={px2vw(76)}
          mr={px2vw(22)}
          onClick={() => router.push('/leaderBoard')}
        >
          <Image src={leaderBoard} w="full" h="full" />
        </Flex>
        <Flex w={px2vw(250)} h={px2vw(76)}>
          <Image src={currentAvailable > 0 ? play1 : play2} w="full" h="full" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Index
