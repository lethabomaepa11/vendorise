import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@mantine/core/styles.css";
import Header from "@/app/components/Header";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vendorise",
  description: "The ultimate MarketPlace",
};
const theme = createTheme({
  primaryColor: "teal",
  components: {
    Button: {
      defaultProps: {
        size: "lg",
        radius: "md",
        fullWidth: true,
      },
    },
    Input: {
      defaultProps: {
        size: "lg",
        radius: "md",
      },
    },
    TextInput: {
      defaultProps: {
        size: "lg",
        radius: "md",
      },
    },
    PasswordInput: {
      defaultProps: {
        size: "lg",
        radius: "md",
      },
    },
    NativeSelect: {
      defaultProps: {
        size: "lg",
        radius: "md",
      },
    },
    NumberInput: {
      defaultProps: {
        size: "lg",
        radius: "md",
      },
    },
    Card: {
      defaultProps: {
        padding: "lg",
        radius: "md",
        shadow: "sm",
      },
    },
  },
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme}>
          <Header />
          <div className="mt-[80px]"></div>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
