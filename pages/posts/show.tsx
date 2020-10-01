import React from 'react';
import Head from 'next/head';
import { Heading, Center, Flex } from '@chakra-ui/core';

function PostsShowPage() {
  return (
    <>
      <Head>
        <title>PostsShowPage</title>
      </Head>

      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Center>
          <Heading size="lg">I am posts/show page</Heading>
        </Center>
      </Flex>
    </>
  );
}

export default PostsShowPage;
