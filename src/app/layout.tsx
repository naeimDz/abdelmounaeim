import type { Metadata } from "next";
import "../styles/globals.css";

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
    <html lang="en">
            <body>
    <AuthProvider>
    <ErrorProvider>
      <ThemeProvider>
        <LanguageProvider>
          <NotificationProvider>
            <SettingsProvider>
              <ModalProvider>

      

  
        {children}
        
    

    </ModalProvider>
              </SettingsProvider>
            </NotificationProvider>
          </LanguageProvider>
        </ThemeProvider>
      </ErrorProvider>
    </AuthProvider>
    </body>
    </html>
  );
}


