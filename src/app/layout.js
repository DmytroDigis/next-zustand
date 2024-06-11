// app/layout.js
import { ChakraProvider } from '@chakra-ui/react';

export const metadata = {
  title: 'Next.js App with Zustand and react-hook-form',
  description: 'A sample app to demonstrate Next.js features',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <ChakraProvider>
      {children}
    </ChakraProvider>
    </body>
    </html>
  );
}
