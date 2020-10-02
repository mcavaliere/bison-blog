import React from 'react';
import Head from 'next/head';
import { Heading, Flex } from '@chakra-ui/core';

import { PostList } from '../components/PostList';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column">
        <Heading size="lg">Recent posts</Heading>
        <PostList />
      </Flex>
    </>
  );
}

export default Home;
