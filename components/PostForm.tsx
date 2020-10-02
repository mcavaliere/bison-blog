import React from 'react';
import { FormLabel, FormControl, FormErrorMessage, Input, Button, Textarea } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';

import { useAuth } from '../context/auth';
import { useCreatePostMutation } from '../types';

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($data: PostCreateInput!) {
    createOnePost(data: $data) {
      id
      title
      body
    }
  }
`;

/** Description of component */
export function PostForm() {
  const { register, handleSubmit, errors } = useForm();
  const [createPost] = useCreatePostMutation();
  const router = useRouter();

  const { user: { id: userId } = {} } = useAuth();

  const onSubmit = async (data) => {
    // Create the post
    await createPost({
      variables: {
        data: {
          ...data,
          author: {
            connect: {
              id: userId,
            },
          },
        },
      },
    });

    // Redirect to homepage
    await router.replace('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.title}>
        <FormLabel htmlFor="title">Post Title</FormLabel>
        <Input type="text" name="title" id="title" ref={register({ required: true })} />
        <FormErrorMessage>{errors.title && <span>This field is required</span>}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.body}>
        <FormLabel htmlFor="body">Post Body</FormLabel>
        <Textarea name="body" id="body" ref={register({ required: true })} />
        <FormErrorMessage>{errors.body && <span>This field is required</span>}</FormErrorMessage>
      </FormControl>

      <Button type="submit">Submit</Button>
    </form>
  );
}
