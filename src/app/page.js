// app/page.js
"use client";

import { Box, Heading, Button, VStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import useStore from '../store';

const MainPage = () => {
  const { elements, loggedIn, toggleLogin } = useStore();

  return (
    <Box p={4}>
      <Header />
      <VStack spacing={4} align="stretch">
        <Heading>Main Page</Heading>
        {!loggedIn ? (
          <Text>Please log in to see the content.</Text>
        ) : (
          <>
            {elements.map((element, index) => (
              <Box key={index} p={4} borderWidth={1} borderRadius="lg">
                {element}
              </Box>
            ))}
            <Link href="/add-element">
              <Button colorScheme="teal">Add Element</Button>
            </Link>
          </>
        )}
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

export default MainPage;
