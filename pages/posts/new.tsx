import React from 'react';
import Head from 'next/head';
import { Heading, Center, Flex } from '@chakra-ui/core';

function PostsNewPage() {
  return (
    <>
      <Head>
        <title>PostsNewPage</title>
      </Head>

      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Center>
          <Heading size="lg">I am posts/new page</Heading>
        </Center>
      </Flex>
    </>
  );
}

export default PostsNewPage;
