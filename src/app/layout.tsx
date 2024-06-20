import type { Metadata } from "next";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/Portfolio/Navbar";
import { AuthProvider } from "@/utils/context/AuthContext";
import { ErrorProvider } from "@/utils/context/ErrorContext";
import { ThemeProvider } from "@/utils/context/ThemeContext";
import { LanguageProvider } from "@/utils/context/LanguageContext";
import { NotificationProvider } from "@/utils/context/NotificationContext";
import { SettingsProvider } from "@/utils/context/SettingsContext";
import { ModalProvider } from "@/utils/context/ModalContext";


export const metadata: Metadata = {
  title: "AbdelMounaeim Portfolio",
  description: "hello, it's me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
    <ErrorProvider>
      <ThemeProvider>
        <LanguageProvider>
          <NotificationProvider>
            <SettingsProvider>
              <ModalProvider>
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="images/favicon.ico" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/magnific-popup.css" rel="stylesheet" />
        <link href="css/materialdesignicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.css" />
        <link rel="stylesheet" href="css/owl.transitions.css" />
        <link href="css/style.css" rel="stylesheet" id="theme-opt" />
        <link href="css/colors/default.css" rel="stylesheet" id="color-opt" />
      </Head>
      <body>
      <Navbar />
        <section>{children}</section>
        <Script src="js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="js/jquery.easing.min.js" strategy="lazyOnload" />
        <Script src="js/scrollspy.min.js" strategy="lazyOnload" />
        <Script src="js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="js/isotope.js" strategy="lazyOnload" />
        <Script src="js/portfolio-filter.js" strategy="lazyOnload" />
        <Script src="js/magnific.init.js" strategy="lazyOnload" />
        <Script src="js/contact.js" strategy="lazyOnload" />
        <Script src="js/counter.init.js" strategy="lazyOnload" />
        <Script src="js/jquery-twennmax.js" strategy="lazyOnload" />
        <Script src="js/TweenMax.min.js" strategy="lazyOnload" />
        <Script src="js/jquery-twennmax.init.js" strategy="lazyOnload" />
        <Script src="js/feather.min.js" strategy="lazyOnload" />
        <Script src="js/app.js" strategy="lazyOnload" />
      </body>
    </html>
    </ModalProvider>
              </SettingsProvider>
            </NotificationProvider>
          </LanguageProvider>
        </ThemeProvider>
      </ErrorProvider>
    </AuthProvider>
  );
}


