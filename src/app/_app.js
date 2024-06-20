import '../styles/Admin.module.css'
import '../styles/Home.module.css'
import '../styles/globals.css'
import { AppProps } from 'next/app';
import { AuthProvider } from '../utils/context/AuthContext';
import { ThemeProvider } from '../utils/context/ThemeContext';
import { LanguageProvider } from '../utils/context/LanguageContext';
import { NotificationProvider } from '../utils/context/NotificationContext';
import { SettingsProvider } from '../utils/context/SettingsContext';
import { ModalProvider } from '../utils/context/ModalContext';
import { ErrorProvider } from '../utils/context/ErrorContext';
function MyApp({ Component, pageProps }) {

 return (
    <ErrorProvider>
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <NotificationProvider>
              <SettingsProvider>
                <ModalProvider>
                  <Component {...pageProps} />
                </ModalProvider>
              </SettingsProvider>
            </NotificationProvider>
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </ErrorProvider>
  );

}

export default MyApp;
