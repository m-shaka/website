import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Flex, IconButton, Tooltip } from '@radix-ui/themes';
import { RadixLogo } from '@components/RadixLogo';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from '@components/ThemeToggle';
import { BoxLink } from '@components/BoxLink';
import { RemoveScroll } from 'react-remove-scroll';
import { PrimitivesDocsSearch } from '@components/PrimitivesDocsSearch';
import { classNames } from '@lib/classNames';
import styles from './PrimitiveDocsHeader.module.css';

type PrimitivesDocsHeaderProps = {
  onMobileMenuButtonClick?: () => void;
  isMenuActive?: boolean;
};

export const PrimitivesDocsHeader = (props: PrimitivesDocsHeaderProps) => {
  const { onMobileMenuButtonClick, isMenuActive } = props;
  return (
    <Box
      asChild
      className={classNames(RemoveScroll.classNames.fullWidth, styles.Header)}
      position="relative"
    >
      <header>
        <Box mx="auto" style={{ maxWidth: '780px' }}>
          <Flex align="center" justify="between" height="9">
            <NextLink href="/" passHref>
              <BoxLink style={{ position: 'absolute', left: 'var(--space-5)' }}>
                <RadixLogo label="Radix homepage" />
              </BoxLink>
            </NextLink>

            <Box display={{ initial: 'none', sm: 'block' }} width="100%" pr={{ sm: '9', md: '0' }}>
              <PrimitivesDocsSearch />
            </Box>

            <Flex style={{ position: 'absolute', right: 'var(--space-5)', gap: 'var(--space-2)' }}>
              <ThemeToggle />

              <Box display={{ sm: 'none' }}>
                <Tooltip content="Menu">
                  <IconButton
                    size="1"
                    color="gray"
                    variant={isMenuActive ? 'soft' : 'ghost'}
                    onClick={onMobileMenuButtonClick}
                  >
                    <HamburgerMenuIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </header>
    </Box>
  );
};
