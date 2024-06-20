"use client";
import { useAuth } from "@/utils/context/AuthContext";
import HomeSection from "../components/Portfolio/HomeSection"
import { useTheme } from "@/utils/context/ThemeContext";
import { useLanguage } from "@/utils/context/LanguageContext";
import { useNotification } from "@/utils/context/NotificationContext";
import { useSettings } from "@/utils/context/SettingsContext";
import { useModal } from "@/utils/context/ModalContext";
import Button from "@/components/Common/Button";
import { useContext } from "react";

export default function Home() {
  const { isAuthenticated, login, logout } = useAuth();

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { notifications, addNotification, removeNotification } = useNotification();
  const { settings, updateSetting } = useSettings();
  const { isOpen, openModal, closeModal } = useModal();

  const handleLogin = () => {
    login();
    addNotification({ message: "Logged in", type: "success" });
  };

  const handleLogout = () => {
    logout();
    addNotification({ message: "Logged out", type: "info" });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Theme: {theme}</p>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <p>Language: {language}</p>
      <Button onClick={() => setLanguage("fr")}>Set Language to French</Button>
      <p>Notifications:</p>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {notification.message}
            <Button onClick={() => removeNotification(index)}>Dismiss</Button>
          </li>
        ))}
      </ul>
      <p>Settings: {JSON.stringify(settings)}</p>
      <Button onClick={() => updateSetting("newSetting", "newValue")}>Update Setting</Button>
      <p>Modal is {isOpen ? "Open" : "Closed"}</p>
      <Button onClick={openModal}>Open Modal</Button>
      <Button onClick={closeModal}>Close Modal</Button>
      <p>Authentication Status: {isAuthenticated ? "Logged In" : "Logged Out"}</p>
      <Button onClick={isAuthenticated ? handleLogout : handleLogin}>
        {isAuthenticated ? "Logout" : "Login"}
      </Button>
    </div>
  );
}
