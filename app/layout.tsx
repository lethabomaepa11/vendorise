import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import Header from "@/app/components/Header";
import CartProvider from "@/app/hooks/CartContext";
import AuthProvider from "@/app/hooks/AuthContext";
import LoadingUI from "@/app/components/LoadingUI";
import { Open_Sans, Montserrat } from "next/font/google";
import {
  ColorSchemeScript,
  createTheme,
  LoadingOverlay,
  MantineProvider,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Suspense } from "react";

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
    FileInput: {
      defaultProps: {
        size: "lg",
        radius: "md",
      },
    },
    TextArea: {
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
    Autocomplete: {
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
    Notification: {
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
const bodyFont = Open_Sans({
  subsets: ["latin"],
  variable: "--body-font",
});

const headingsFont = Montserrat({
  subsets: ["latin"],
  variable: "--headings-font",
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
        className={`${bodyFont.variable} ${headingsFont.variable} antialiased`}
      >
        <MantineProvider theme={theme}>
          <Notifications />
          <AuthProvider>
            <CartProvider>
              <Suspense
                fallback={
                  <LoadingOverlay
                    visible
                    zIndex={1000}
                    loaderProps={{ children: <LoadingUI /> }}
                  />
                }
              >
                <Header />
                <div className="mt-[150px] p-2 lg:p-5">{children}</div>
              </Suspense>
            </CartProvider>
          </AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
