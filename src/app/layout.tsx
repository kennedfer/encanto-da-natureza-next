"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { darkTheme, lightTheme } from "@/styles/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={lightTheme}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
