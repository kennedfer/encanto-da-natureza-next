"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { darkTheme, lightTheme } from "@/styles/theme";
import texts from "@/texts/texts";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={texts.headTags.description} />
        <title>{texts.headTags.title}</title>
      </head>
      <body>
        <ThemeProvider theme={darkTheme}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
