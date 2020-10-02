import React from 'react';
import { Flex } from '@chakra-ui/core';

/** Description of component */
export function PageContainer({ children }) {
  const marginHorizontal = { base: 5, md: 100, lg: 200 };
  return (
    <Flex direction="column" marginLeft={marginHorizontal} marginRight={marginHorizontal}>
      {children}
    </Flex>
  );
}
