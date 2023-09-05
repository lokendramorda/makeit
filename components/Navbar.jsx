import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer,HStack } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { Show, Hide } from '@chakra-ui/react'

const Navbar = () => (
  <Flex px='10' py='2' borderBottom='1px' position="fixed" w="100%" top="0px" zIndex="10" borderColor='gray.100' backgroundColor="gray.100">
    <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Make It</Link>
    
    </Box>
    <Spacer />
    
  <Flex fontSize='md' pt="3" w="23%"  flexWrap='wrap' fontWeight='bold' color='gray.600' >
  <Hide breakpoint='(max-width: 900px)'>
    <a href='/' passHref>
       Home
    </a>
    <Spacer />
    <a href='/search' passHref>
       Search
    </a>
    <Spacer />
    <a href='/search?purpose=for-sale' passHref>
       Buy
    </a>
    <Spacer />
    <a href='/search?purpose=for-rent' passHref>
       Rent 
    </a>
</Hide>
  </Flex>

    <Box>
    <Show breakpoint='(max-width: 900px)'>
      <Menu >
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      </Show>
    </Box>
  </Flex>
);

export default Navbar;
