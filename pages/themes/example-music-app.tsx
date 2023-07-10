import { Box, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';
import { ExampleMusicApp } from '@components/themes/ExampleMusicApp';

export default function ExamplePage() {
  return (
    <Box asChild p="9">
      <Theme grayScale="slate" accentScale="red" appearance="light" radius="medium">
        <ExampleMusicApp />
      </Theme>
    </Box>
  );
}
