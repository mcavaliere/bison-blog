import React from 'react';
import gql from 'graphql-tag';
import { Box, Heading, Stack, Spinner, Text } from '@chakra-ui/core';

import { usePostsQuery, PostsQuery } from '../types';

export const POSTS_QUERY = gql`
  query posts {
    posts {
      id
      title
      body
    }
  }
`;

export const Loading = () => <Spinner />;
export const Error = () => <Text>Error. See dev tools.</Text>;
export const Empty = () => <Text>No data.</Text>;

export const Success = ({ posts }: PostsQuery) => {
  return (
    <Stack>
      {posts.map((p) => (
        <Box p={5} shadow="md">
          <Heading>{p.title}</Heading>
          {p.body}
        </Box>
      ))}
    </Stack>
  );
};

export const FetchPostsCell = () => {
  const { data, loading, error } = usePostsQuery();

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data.posts) return <Success {...data} />;

  return <Empty />;
};
