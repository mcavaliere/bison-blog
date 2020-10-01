import React from 'react';
import { Link, Stack, useBreakpoint, MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/core';
import NextLink from 'next/link';

export function Nav() {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'base';

  return isMobile ? (
    <Menu>
      <MenuButton variant="outline" colorScheme="lightPurple" ml="auto">
        =
      </MenuButton>

      <MenuList width="full">
        <MenuItem>
          <NextLink href="/">
            <Link href="/posts/new">Create Post</Link>
          </NextLink>
        </MenuItem>

        <MenuItem>
          <Link href="https://github.com/echobind" isExternal>
            Bison on Github
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <Stack as="nav" direction="row" ml="auto" alignItems="center" fontSize="md" spacing={8}>
      <NextLink href="/posts/new">
        <Link href="">Create Post</Link>
      </NextLink>

      <Link href="https://github.com/echobind" isExternal>
        Bison on Github
      </Link>
    </Stack>
  );
}
