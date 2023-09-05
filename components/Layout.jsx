import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box >
        <header>
          <Navbar />
        </header>
        <main style={{marginTop:"60px"}}>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
