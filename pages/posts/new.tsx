import React from 'react';
import Head from 'next/head';
import {
  Heading,
  Flex,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/core';
import { useForm } from 'react-hook-form';

function PostsNewPage() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.warn(data);

  console.log(`---------------- errors: `, errors);

  return (
    <>
      <Head>
        <title>PostsNewPage</title>
      </Head>

      <Flex direction="column" justify="center">
        <Heading size="lg">New Post</Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.title}>
            <FormLabel htmlFor="title">Post Title</FormLabel>
            <Input type="text" name="title" id="title" ref={register({ required: true })} />
            <FormErrorMessage>
              {errors.title && <span>This field is required</span>}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.body}>
            <FormLabel htmlFor="boty">Post Body</FormLabel>
            <Textarea name="body" id="body" ref={register({ required: true })} />
            <FormErrorMessage>
              {errors.body && <span>This field is required</span>}
            </FormErrorMessage>
          </FormControl>

          <Button type="submit">Submit</Button>
        </form>
      </Flex>
    </>
  );
}

export default PostsNewPage;
