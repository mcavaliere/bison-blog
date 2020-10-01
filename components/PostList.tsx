import React from 'react';
import { Heading, Center } from '@chakra-ui/core';

/** Description of component */
export function PostList() {
  const message = 'Hola! PostList Created!';

  return (
    <Center bg="red.300" color="white" padding={{ base: 16, lg: 24 }}>
      <Heading>{message}</Heading>
    </Center>
  );
}
