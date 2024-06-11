// app/add-element/page.js
"use client";

import { Box, Button, VStack, Heading, Input, FormErrorMessage, FormLabel, FormControl } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import useStore from '../../store';

const schema = z.object({
  element: z.string().min(1, 'Element is required'),
});

const AddElementPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  const { addElement } = useStore();
  const router = useRouter();

  const onSubmit = (data) => {
    addElement(data.element);
    router.push('/');
  };

  return (
    <Box p={4}>
      <Header />
      <VStack spacing={4} align="stretch">
        <Heading>Add Element</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.element}>
            <FormLabel>Element</FormLabel>
            <Input {...register('element')} />
            <FormErrorMessage>{errors.element?.message}</FormErrorMessage>
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </VStack>
      <Footer />
    </Box>
  );
};

const Header = () => {
  const { loggedIn, toggleLogin } = useStore();
  return (
    <Box as="header" p={4} borderBottomWidth={1}>
      <Button onClick={toggleLogin}>{loggedIn ? 'Logout' : 'Login'}</Button>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box as="footer" p={4} borderTopWidth={1} textAlign="center">
      Footer Content
    </Box>
  );
};

export default AddElementPage;
