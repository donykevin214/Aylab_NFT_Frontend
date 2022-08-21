import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import px2vw from '@/utils/px2vw'
import playModalIcon from '@/assets/imgs/playModalIcon.png'
import back from '@/assets/imgs/back.png'

interface IProps {
  backClick: () => void
}

function Index({ backClick }: IProps) {
  return (
    <Flex
      w={px2vw(360)}
      h={px2vw(355)}
      m="auto"
      pos="fixed"
      top="0"
      right="0"
      bottom="0"
      left="0"
      zIndex={10}
    >
      <Flex
        w={px2vw(350)}
        h={px2vw(345)}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bgColor="yellow.100"
        ml="auto"
        mb="auto"
        border="5px solid"
        borderColor="black.100"
        zIndex={9}
      >
        <Image w={px2vw(80)} h={px2vw(54)} mb={px2vw(10)} src={playModalIcon} />
        <Text
          fontSize={px2vw(26)}
          lineHeight={px2vw(31)}
          mb={px2vw(15)}
          fontWeight="700"
          fontFamily="LoRes9OT"
          color="black.100"
        >
          Ready to Flap?
        </Text>
        <Text
          w={px2vw(270)}
          fontSize={px2vw(16)}
          lineHeight={px2vw(20)}
          mb={px2vw(30)}
          fontWeight="400"
          color="black.100"
          opacity="0.5"
          textAlign="center"
        >
          Start the game need 1 x Tom Bird NFT for each time
        </Text>
        <Flex w="full" justifyContent="center">
          <Image
            w={px2vw(54)}
            h={px2vw(54)}
            mr={px2vw(18)}
            src={back}
            onClick={() => backClick()}
          />
          <Flex
            w={px2vw(218)}
            h={px2vw(54)}
            fontSize={px2vw(21)}
            fontWeight="700"
            fontFamily="LoRes9OT"
            color="blue.200"
            bgColor="black.100"
            justifyContent="center"
            alignItems="center"
            pos="relative"
          >
            start!
            <Flex
              justifyContent="center"
              alignItems="center"
              border="3px solid"
              borderColor="black.100"
              bgColor="green.100"
              color="black.100"
              pos="absolute"
              fontWeight="400"
              w={px2vw(70)}
              h={px2vw(30)}
              right={px2vw(-10)}
              top={px2vw(-15)}
              fontSize={px2vw(14)}
            >
              - 1 Brid
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* 底框黑色 */}
      <Flex
        w={px2vw(350)}
        h={px2vw(345)}
        bgColor="black.100"
        pos="absolute"
        left="0"
        bottom="0"
        zIndex={8}
      />
    </Flex>
  )
}

export default React.memo(Index)
