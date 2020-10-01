import React from 'react';
import Head from 'next/head';
import { Heading, Flex } from '@chakra-ui/core';

import { PostForm } from '../../components/PostForm';

function PostsNewPage() {
  return (
    <>
      <Head>
        <title>PostsNewPage</title>
      </Head>

      <Flex direction="column" justify="center">
        <Heading size="lg">New Post</Heading>

        <PostForm />
      </Flex>
    </>
  );
}

export default PostsNewPage;
