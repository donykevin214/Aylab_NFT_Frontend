import React, { useEffect, useState } from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import blueBg from '@/assets/imgs/blueBg.png'
import back from '@/assets/imgs/back.png'
import line2 from '@/assets/imgs/line2.png'
import check from '@/assets/imgs/check.png'
import highestScore from '@/assets/imgs/highestScore.png'
import worldIcon from '@/assets/imgs/worldIcon.png'
import play from '@/assets/imgs/play1.png'
import tweet from '@/assets/imgs/tweet.png'
import px2vw from '@/utils/px2vw'
import { useRouter } from 'next/router'

interface listItem {
  id: number | string
  address: string
  points: number | string
}

function Index() {
  const router = useRouter()
  const [currentAvailable] = useState(0)
  const [userAddress] = useState('0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc07')
  const [userAddressIndex, setUserAddressIndex] = useState(-1)
  const [list] = useState<listItem[]>([
    {
      id: 1,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06',
      points: 109,
    },
    {
      id: 2,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06',
      points: 108,
    },
    {
      id: 3,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06',
      points: 107,
    },
    {
      id: 4,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06',
      points: 106,
    },
    {
      id: 5,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06',
      points: 105,
    },
    {
      id: 6,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06',
      points: 104,
    },
    {
      id: 7,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06',
      points: 103,
    },
    {
      id: 8,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06',
      points: 102,
    },
    {
      id: 9,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06',
      points: 101,
    },
    {
      id: 10,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc07',
      points: 100,
    },
    {
      id: 11,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06',
      points: 100,
    },
    {
      id: 12,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06',
      points: 100,
    },
    {
      id: 13,
      address: '0x14da4Fc1abD3D749E62C1f5E1Cd219A6e31ecc06',
      points: 100,
    },
  ])

  useEffect(() => {
    list.map((item: listItem, index: number) => {
      if (item?.address === userAddress) {
        setUserAddressIndex(index)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list])

  return (
    <Flex
      bgImage={blueBg}
      px={px2vw(20)}
      py={px2vw(40)}
      w="full"
      minH="100vh"
      flexDir="column"
      justifyContent="space-between"
      bgRepeat="no-repeat"
      bgSize="100%"
      bgPos="center"
    >
      {/* 内容 */}
      <Flex flexDir="column">
        {/* 返回 + 账号 */}
        <Flex w="full" mb={px2vw(30)}>
          <Image
            w={px2vw(54)}
            h={px2vw(54)}
            mr={px2vw(13)}
            src={back}
            onClick={() => router.back()}
          />
          {/* 链接版块 */}
          <Flex
            w={px2vw(283)}
            h={px2vw(54)}
            px={px2vw(8)}
            alignItems="center"
            bgColor="yellow.100"
            border="3px solid"
            borderColor="black.100"
            boxSizing="border-box"
          >
            <Flex w="full" justifyContent="space-between">
              <Text fontSize={px2vw(16)} color="black.100" fontWeight="700" fontFamily="LoRes9OT">
                CONNECTED
              </Text>
              <Image src={line2} w={px2vw(66)} h={px2vw(3)} my="auto" />
              <Image src={check} w={px2vw(40)} h={px2vw(20)} my="auto" />
            </Flex>
          </Flex>
        </Flex>
        {/* 最高积分 */}
        <Flex
          w={px2vw(330)}
          h={px2vw(85)}
          mb={px2vw(27)}
          ml="auto"
          pos="relative"
          _after={{
            content: '""',
            w: 'full',
            h: 'full',
            bgColor: 'black.100',
            pos: 'absolute',
            left: px2vw(-7),
            bottom: px2vw(-7),
          }}
        >
          <Flex
            px={px2vw(20)}
            w="full"
            h="full"
            justifyContent="space-between"
            alignItems="center"
            border="4px solid"
            borderColor="black.100"
            bgColor="blue.100"
            boxSizing="border-box"
            zIndex="1"
          >
            <Image w={px2vw(152)} h={px2vw(60)} src={highestScore} />
            <Text fontSize={px2vw(48)} color="white.100" fontWeight="400" fontFamily="LoRes9OT">
              {list[0]?.points}
            </Text>
          </Flex>
        </Flex>
        {/* 列表 */}
        <Flex
          flexDir="column"
          w="full"
          border="4px solid"
          borderColor="black.100"
          bgColor="yellow.100"
        >
          {/* 标题 */}
          <Flex
            h={px2vw(82)}
            px={px2vw(25)}
            w="full"
            justifyContent="space-between"
            alignItems="center"
            boxSizing="border-box"
          >
            <Image src={worldIcon} w={px2vw(35)} h={px2vw(36)} opacity="0" />
            <Flex
              fontSize={px2vw(18)}
              lineHeight={px2vw(22)}
              color="black.100"
              fontWeight="700"
              fontFamily="LoRes9OT"
              flexDir="column"
              textAlign="center"
            >
              <Text>World’s</Text>
              <Text>Leader Board</Text>
            </Flex>
            <Image src={worldIcon} w={px2vw(35)} h={px2vw(36)} />
          </Flex>
          {/* 数据 */}
          {list.map((item: listItem, index: number) => (
            <Flex key={index}>
              <Flex
                display={
                  list.length <= 10
                    ? 'flex'
                    : index < 6 ||
                      index === userAddressIndex ||
                      index === userAddressIndex + 1 ||
                      index === userAddressIndex + 2
                    ? 'flex'
                    : 'none'
                }
                h={item?.address === userAddress ? px2vw(44) : px2vw(32)}
                px={px2vw(17)}
                bgColor={index % 2 === 0 ? 'white.200' : 'yellow.100'}
                w="full"
                justifyContent="space-between"
                alignItems="center"
                boxSizing="border-box"
                pos="relative"
              >
                <Text
                  w={px2vw(60)}
                  fontSize={px2vw(21)}
                  color="blue.100"
                  fontWeight="400"
                  fontFamily="LoRes9OT"
                  textAlign="left"
                >
                  #{index + 1}
                </Text>
                <Text
                  w={px2vw(80)}
                  fontSize={px2vw(18)}
                  color="black.100"
                  fontWeight="400"
                  textAlign="center"
                >
                  {item?.address.substring(0, 2)}...
                  {item?.address.substring(item?.address.length - 4, item?.address.length)}
                </Text>
                <Text
                  w={px2vw(60)}
                  fontSize={px2vw(21)}
                  color="blue.100"
                  fontWeight="400"
                  fontFamily="LoRes9OT"
                  textAlign="right"
                >
                  {item?.points}
                </Text>
                {/* 用户自己 */}
                {item?.address === userAddress && (
                  <Flex
                    border="4px solid"
                    borderColor="black.100"
                    bgColor="blue.100"
                    justifyContent="space-between"
                    alignItems="center"
                    pos="absolute"
                    top="0"
                    left={px2vw(-7)}
                    w={`calc(100% + ${px2vw(14)})`}
                    h={px2vw(44)}
                    pl={px2vw(19)}
                    pr={px2vw(20)}
                  >
                    <Text
                      w={px2vw(60)}
                      fontSize={px2vw(21)}
                      color="yellow.200"
                      fontWeight="400"
                      fontFamily="LoRes9OT"
                      textAlign="left"
                    >
                      #{index + 1}
                    </Text>
                    <Text
                      w={px2vw(150)}
                      fontSize={px2vw(16)}
                      color="white.100"
                      fontWeight="700"
                      fontFamily="LoRes9OT"
                      textAlign="center"
                    >
                      You are here!
                    </Text>
                    <Text
                      w={px2vw(60)}
                      fontSize={px2vw(21)}
                      color="yellow.200"
                      fontWeight="400"
                      fontFamily="LoRes9OT"
                      textAlign="right"
                    >
                      {item?.points}
                    </Text>
                  </Flex>
                )}
              </Flex>
              <Flex
                display={list.length <= 10 ? 'none' : index === 6 ? 'flex' : 'none'}
                h={px2vw(32)}
                lineHeight={px2vw(32)}
                px={px2vw(17)}
                fontSize={px2vw(21)}
                bgColor="yellow.100"
                w="full"
                justifyContent="center"
                alignItems="center"
                color="black.100"
              >
                ...
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      {/* 底部 */}
      {currentAvailable ? (
        <Flex w="full" justifyContent="space-between">
          <Flex pos="relative">
            <Flex
              border="3px solid"
              borderColor="black.100"
              bgColor="pink.100"
              color="white.100"
              justifyContent="center"
              alignItems="center"
              pos="absolute"
              fontSize={px2vw(12)}
              w={px2vw(70)}
              h={px2vw(30)}
              top={px2vw(-15)}
              right={px2vw(-8)}
            >
              {currentAvailable} left
            </Flex>
            <Image w={px2vw(244)} h={px2vw(76)} src={play} />
          </Flex>
          <Image w={px2vw(76)} h={px2vw(76)} src={tweet} />
        </Flex>
      ) : (
        <Flex flexDir="column" w="full" h={px2vw(100)}>
          <Flex
            justifyContent="center"
            alignItems="center"
            w="full"
            bgColor="black.100"
            h={px2vw(35)}
          >
            <Text
              color="white.100"
              opacity="0.6"
              fontWeight="400"
              fontFamily="LoRes9OT"
              fontSize={px2vw(13)}
            >
              Uhhh… Seems you’ve Spent all your birds
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            w="full"
            bgColor="pink.100"
            border="5px solid"
            borderTop="none"
            borderColor="black.100"
            color="white.100"
            fontFamily="LoRes9OT"
            fontWeight="700"
            h={px2vw(65)}
            fontSize={px2vw(21)}
            onClick={() => router.push('/mintEnd')}
          >
            {`Mint here to play  >>>`}
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

export default Index
