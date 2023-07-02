import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { globalCss, darkTheme, DesignSystemProvider } from '@modulz/design-system';
import { Provider as RadixThemesProvider, ThemeConfig, ThemePanel } from '@radix-ui/themes';
import { PrimitivesDocsPage } from '@components/PrimitivesDocsPage';
import { ColorsDocsPage } from '@components/ColorsDocsPage';
import { useAnalytics } from '@lib/analytics';
import { CssLibPreferenceProvider } from '@components/CssLibPreference';
import { ThemesDocsPage } from '@components/ThemesDocsPage';
import '@radix-ui/themes/dist/index.css';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    color: 'var(--text-color, $hiContrast)',
    backgroundColor: 'var(--color-background, $loContrast)',
    fontFamily: '$untitled',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',

    '.dark-theme &': {
      backgroundColor: 'var(--color-background, $loContrast)',
    },
  },

  svg: {
    display: 'block',
    verticalAlign: 'middle',
    overflow: 'visible',
  },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violetA5',
    color: '$violet12',
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'h1, h2, h3, h4, h5': { fontWeight: 500 },
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  useAnalytics();
  const router = useRouter();

  const isPrimitivesDocs = router.pathname.includes('/docs/primitives');
  const isColorsDocs = router.pathname.includes('/docs/colors');
  const isThemesDocs = router.pathname.includes('/docs/themes');

  return (
    <DesignSystemProvider>
      <RadixThemesProvider>
        <CssLibPreferenceProvider>
          <ThemeProvider
            disableTransitionOnChange
            attribute="class"
            value={{ light: 'light-theme', dark: darkTheme.className }}
            defaultTheme="system"
          >
            {(() => {
              if (isPrimitivesDocs) {
                return (
                  <ThemeConfig>
                    <PrimitivesDocsPage>
                      <Component {...pageProps} />
                    </PrimitivesDocsPage>
                  </ThemeConfig>
                );
              }

              if (isColorsDocs) {
                return (
                  <ThemeConfig>
                    <ColorsDocsPage>
                      <Component {...pageProps} />
                    </ColorsDocsPage>
                  </ThemeConfig>
                );
              }

              if (isThemesDocs) {
                return (
                  <ThemeConfig accentScale="grass">
                    <ThemePanel />
                    <ThemesDocsPage>
                      <Component {...pageProps} />
                    </ThemesDocsPage>
                  </ThemeConfig>
                );
              }

              return (
                <ThemeConfig>
                  <Component {...pageProps} />
                </ThemeConfig>
              );
            })()}
          </ThemeProvider>
        </CssLibPreferenceProvider>
      </RadixThemesProvider>
    </DesignSystemProvider>
  );
}

export default App;
