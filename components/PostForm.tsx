import React from 'react';
import { FormLabel, FormControl, FormErrorMessage, Input, Button, Textarea } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';

/** Description of component */
export function PostForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.warn(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.title}>
        <FormLabel htmlFor="title">Post Title</FormLabel>
        <Input type="text" name="title" id="title" ref={register({ required: true })} />
        <FormErrorMessage>{errors.title && <span>This field is required</span>}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.body}>
        <FormLabel htmlFor="boty">Post Body</FormLabel>
        <Textarea name="body" id="body" ref={register({ required: true })} />
        <FormErrorMessage>{errors.body && <span>This field is required</span>}</FormErrorMessage>
      </FormControl>

      <Button type="submit">Submit</Button>
    </form>
  );
}
