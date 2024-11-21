import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import Header from "@/app/components/Header";
import CartProvider from "@/app/hooks/CartContext";
import AuthProvider from "@/app/hooks/AuthContext";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Suspense } from "react";
import Image from "next/image";

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
          <Notifications />
          <AuthProvider>
            <CartProvider>
              <Suspense
                fallback={
                  <div className="w-screen h-screen flex justify-center items-center">
                    <Image
                      src="/logo.png"
                      width={300}
                      height={300}
                      alt="logo"
                      className="animate-bounce"
                    />
                  </div>
                }
              >
                <Header />
                <div className="mt-[80px] p-2 lg:p-5">{children}</div>
              </Suspense>
            </CartProvider>
          </AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
