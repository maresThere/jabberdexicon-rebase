import React from 'react'
import { Block, Heading, Text } from 'rebass'

const WOD = () => (
  <Block
    borderLeft
    color='blue'
    px={2}
>
    <Heading
      level={2}
      size={0}
    >
      Block
    </Heading>
    <Text>
      Generic box for containing things
    </Text>

  </Block>
)

export default WOD
