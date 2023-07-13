import { Box, Flex, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';
import Head from 'next/head';
import { ThemesHeader } from '@components/ThemesHeader';
import { ThemesHero } from '@components/themes/ThemesHero';
import { ExampleDashboard } from '@components/themes/ExampleDashboard';
import { MagicCurtain } from '@components/themes/MagicCurtain';
import { ExampleEcommerce } from '@components/themes/ExampleEcommerce';
import { ExampleMusicApp } from '@components/themes/ExampleMusicApp';
import { ArrowRightIcon, ReaderIcon } from '@radix-ui/react-icons';

const text = `
  Beautiful, open source component library from the Radix team.
  Made so that you can focus on shipping your app. Just import and go.
`;

export default function ThemesHome() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#FDFCFD" />
        <style>{`
          div.radix-themes.dark-theme {
            --color-surface-1: var(--gray-2);
            --color-surface-1-accent: var(--accent-2);
          }
        `}</style>
      </Head>

      <MagicCurtain.Root>
        <MagicCurtain.Item>
          <div className="light-theme">
            <ThemesHeader />
            <ThemesHero.Root color="blue">
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build faster</ThemesHero.Title>
                <ThemesHero.Text>{text}</ThemesHero.Text>
                <Flex gap="2">
                  <ThemesHero.Button variant="solid" href="/docs/themes/overview/getting-started">
                    Install Themes
                    <ArrowRightIcon />
                  </ThemesHero.Button>
                  <ThemesHero.Button variant="soft" href="/docs/themes/theme/overview">
                    Read docs
                    <ReaderIcon />
                  </ThemesHero.Button>
                </Flex>
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <Theme
                  accentScale="indigo"
                  grayScale="mauve"
                  appearance="light"
                  applyBackgroundColor={false}
                >
                  <ExampleDashboard />
                </Theme>
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </div>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <div className="dark-theme">
            <ThemesHeader />
            <ThemesHero.Root color="green">
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build better</ThemesHero.Title>
                <ThemesHero.Text>{text}</ThemesHero.Text>
                <Flex gap="2">
                  <ThemesHero.Button variant="solid" href="/docs/themes/overview/getting-started">
                    Install Themes
                    <ArrowRightIcon />
                  </ThemesHero.Button>
                  <ThemesHero.Button variant="soft" href="/docs/themes/theme/overview">
                    Read docs
                    <ReaderIcon />
                  </ThemesHero.Button>
                </Flex>
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <Theme
                  accentScale="gray"
                  grayScale="sand"
                  textColor="auto"
                  appearance="dark"
                  applyBackgroundColor={false}
                >
                  <ExampleEcommerce />
                </Theme>
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </div>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <div className="light-theme">
            <ThemesHeader />
            <ThemesHero.Root color="red">
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build hotter</ThemesHero.Title>
                <ThemesHero.Text>{text}</ThemesHero.Text>
                <Flex gap="2">
                  <ThemesHero.Button variant="solid" href="/docs/themes/overview/getting-started">
                    Install Themes
                    <ArrowRightIcon />
                  </ThemesHero.Button>
                  <ThemesHero.Button variant="soft" href="/docs/themes/theme/overview">
                    Read docs
                    <ReaderIcon />
                  </ThemesHero.Button>
                </Flex>
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <Theme
                  accentScale="red"
                  grayScale="slate"
                  textColor="auto"
                  appearance="light"
                  applyBackgroundColor={false}
                >
                  <ExampleMusicApp />
                </Theme>
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </div>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <div className="dark-theme">
            <ThemesHeader />
            <ThemesHero.Root color="blue">
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build nicer</ThemesHero.Title>
                <ThemesHero.Text>{text}</ThemesHero.Text>
                <Flex gap="2">
                  <ThemesHero.Button variant="solid" href="/docs/themes/overview/getting-started">
                    Install Themes
                    <ArrowRightIcon />
                  </ThemesHero.Button>
                  <ThemesHero.Button variant="soft" href="/docs/themes/theme/overview">
                    Read docs
                    <ReaderIcon />
                  </ThemesHero.Button>
                </Flex>
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <Theme
                  accentScale="indigo"
                  grayScale="mauve"
                  appearance="dark"
                  applyBackgroundColor={false}
                >
                  <ExampleDashboard />
                </Theme>
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </div>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <div className="light-theme">
            <ThemesHeader />
            <ThemesHero.Root color="green">
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build cooler</ThemesHero.Title>
                <ThemesHero.Text>{text}</ThemesHero.Text>
                <Flex gap="2">
                  <ThemesHero.Button variant="solid" href="/docs/themes/overview/getting-started">
                    Install Themes
                    <ArrowRightIcon />
                  </ThemesHero.Button>
                  <ThemesHero.Button variant="soft" href="/docs/themes/theme/overview">
                    Read docs
                    <ReaderIcon />
                  </ThemesHero.Button>
                </Flex>
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <Theme
                  accentScale="gray"
                  grayScale="sand"
                  textColor="auto"
                  appearance="light"
                  applyBackgroundColor={false}
                >
                  <ExampleEcommerce />
                </Theme>
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </div>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <div className="dark-theme">
            <ThemesHeader />
            <ThemesHero.Root color="red">
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build more</ThemesHero.Title>
                <ThemesHero.Text>{text}</ThemesHero.Text>
                <Flex gap="2">
                  <ThemesHero.Button variant="solid" href="/docs/themes/overview/getting-started">
                    Install Themes
                    <ArrowRightIcon />
                  </ThemesHero.Button>
                  <ThemesHero.Button variant="soft" href="/docs/themes/theme/overview">
                    Read docs
                    <ReaderIcon />
                  </ThemesHero.Button>
                </Flex>
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <Theme
                  accentScale="red"
                  grayScale="slate"
                  textColor="auto"
                  appearance="dark"
                  applyBackgroundColor={false}
                >
                  <ExampleMusicApp />
                </Theme>
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </div>
        </MagicCurtain.Item>
      </MagicCurtain.Root>
    </>
  );
}
