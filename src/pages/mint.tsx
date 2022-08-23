import React, { useEffect, useState } from 'react'
import { Flex, Image, Input, Text, useNumberInput } from '@chakra-ui/react'
import mintTop from '@/assets/imgs/mintTop.png'
import decIcon from '@/assets/imgs/dec.png'
import incIcon from '@/assets/imgs/inc.png'
import px2vw from '@/utils/px2vw'

function Index() {
  const [inputValue, setInputValue] = useState<any>(1)
  const [remaining] = useState(17300)
  const [total] = useState(101000)
  const [inputErrText, setInputErrText] = useState('')
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: inputValue,
    min: 1,
    max: remaining,
    precision: 0,
    value: inputValue,
    onChange: (e) => {
      setInputValue(e)
    },
  })
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()
  useEffect(() => {
    if (isNaN(inputValue)) {
      setInputErrText('Error Hint: the number is not valid')
    } else if (Number(inputValue) < 1) {
      setInputValue(1)
    } else if (Number(inputValue) > remaining) {
      setInputValue(remaining)
    }
  }, [inputValue, remaining])
  return (
    <Flex w="full" h="100vh" flexDir="column" bgColor="black.100">
      {/* 顶部图片 */}
      <Image src={mintTop} />
      {/* 内容 */}
      <Flex p={px2vw(20)} flexDir="column" boxSizing="border-box">
        {/* 文案版块 */}
        <Flex justifyContent="space-between" mb={px2vw(35)}>
          {/* 左侧 */}
          <Flex flexDir="column">
            <Text
              fontWeight="700"
              fontFamily="LoRes9OT"
              color="green.200"
              fontSize={px2vw(27)}
              lineHeight={px2vw(36)}
              mb={px2vw(10)}
            >
              Tom Bird
            </Text>
            <Flex
              bgColor="green.200"
              justifyContent="center"
              alignItems="center"
              fontWeight="400"
              fontFamily="LoRes9OT"
              color="black"
              fontSize={px2vw(14)}
              lineHeight={px2vw(23)}
              w={px2vw(158)}
              h={px2vw(26)}
            >
              {'* Price options >>>'}
            </Flex>
          </Flex>
          {/* 右侧 */}
          <Flex
            fontSize={px2vw(14)}
            lineHeight={px2vw(23)}
            flexDir="column"
            fontFamily="LoRes9OT"
            fontWeight="400"
            color="green.200"
          >
            {/* X 1 */}
            <Flex mb={px2vw(2)}>
              <Text w={px2vw(49)} mr={px2vw(10)}>{`// $1`}</Text>
              <Text mr={px2vw(10)}>for</Text>
              <Text w={px2vw(43)} textAlign="right" color="white.100">
                X 1
              </Text>
              <Text>birds</Text>
            </Flex>
            {/* X 15 */}
            <Flex mb={px2vw(2)}>
              <Text w={px2vw(49)} mr={px2vw(10)}>{`// $10`}</Text>
              <Text mr={px2vw(10)}>for</Text>
              <Text w={px2vw(43)} textAlign="right" color="white.100">
                X 15
              </Text>
              <Text>birds</Text>
            </Flex>
            {/* X 100 */}
            <Flex>
              <Text w={px2vw(49)} mr={px2vw(10)}>{`// $50`}</Text>
              <Text mr={px2vw(10)}>for</Text>
              <Text w={px2vw(43)} textAlign="right" color="white.100">
                X 100
              </Text>
              <Text>birds</Text>
            </Flex>
          </Flex>
        </Flex>
        {/* 数字版块 */}
        <Flex flexDir="column">
          <Text
            fontSize={px2vw(16)}
            lineHeight={px2vw(20)}
            mb={px2vw(10)}
            fontWeight="400"
            color="white.100"
            opacity="0.5"
          >
            Mint Number
          </Text>
          <Flex w={px2vw(157)} h={px2vw(38)} mb={px2vw(20)}>
            <Image src={decIcon} w={px2vw(38)} h={px2vw(38)} {...dec} />
            <Input
              outline="none"
              border="2px solid"
              borderLeft="none"
              borderRight="none"
              borderColor="green.200"
              borderRadius="0"
              color="white.100"
              textAlign="center"
              fontSize={px2vw(16)}
              h={px2vw(38)}
              _focusVisible={{
                borderColor: 'green.200',
              }}
              {...input}
            />
            <Image src={incIcon} w={px2vw(38)} h={px2vw(38)} {...inc} />
          </Flex>
        </Flex>
        {/* 价格版块 / 错误提示 */}
        {inputErrText ? (
          <Text
            fontSize={px2vw(16)}
            lineHeight={px2vw(20)}
            mb={px2vw(17)}
            fontWeight="400"
            color="red.100"
          >
            {inputErrText}
          </Text>
        ) : (
          <Text
            fontSize={px2vw(20)}
            lineHeight={px2vw(20)}
            mb={px2vw(17)}
            fontWeight="700"
            color="white.100"
          >
            Price: 1 USD
          </Text>
        )}

        {/* Total */}
        <Text
          fontSize={px2vw(16)}
          lineHeight={px2vw(16)}
          mb={px2vw(60)}
          fontWeight="400"
          color="white.100"
          opacity="0.5"
        >
          Total Minted: {remaining}/{total}
        </Text>
        {/* 按钮 */}
        <Flex
          w="full"
          justifyContent="center"
          alignItems="center"
          bgColor="green.200"
          mx="auto"
          fontWeight="700"
          fontFamily="LoRes9OT"
          color="black"
          fontSize={px2vw(23)}
          h={px2vw(70)}
        >
          Mint Token with Test
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Index
