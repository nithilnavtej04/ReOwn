import React, {createContext, useContext, useState, ReactNode} from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ru' | 'zh' | 'ja' | 'ko' | 'hi' | 'te' | 'ta';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    'Categories': 'Categories',
    'Latest Products': 'Latest Products',
    'See All': 'See All',
    'Settings': 'Settings',
    'Profile': 'Profile',
    'Messages': 'Messages',
    'Notifications': 'Notifications',
    'Dark Mode': 'Dark Mode',
    'Language': 'Language',
    'Email Notifications': 'Email Notifications',
    'Phone Notifications': 'Phone Notifications',
    'Privacy & Security': 'Privacy & Security',
    'My Listings': 'My Listings',
    'Favorites': 'Favorites',
    'Home': 'Home',
    'Search': 'Search',
    'Sell': 'Sell',
    'Reels': 'Reels',
    'Hi sujatha! 👋': 'Hi sujatha! 👋',
    'Search products, sellers...': 'Search products, sellers...',
    'Items Sold': 'Items Sold',
    'Rating': 'Rating',
    'Reviews': 'Reviews',
    'Followers': 'Followers',
    'Following': 'Following',
    'Recent Activity': 'Recent Activity',
    'Account': 'Account'
  },
  // Add other languages as needed...
  es: {
    'Categories': 'Categorías',
    'Latest Products': 'Últimos Productos',
    'See All': 'Ver Todo',
    'Settings': 'Configuración',
    'Profile': 'Perfil',
    'Messages': 'Mensajes',
    'Notifications': 'Notificaciones',
    'Dark Mode': 'Modo Oscuro',
    'Language': 'Idioma',
    'Email Notifications': 'Notificaciones por Email',
    'Phone Notifications': 'Notificaciones por Teléfono',
    'Privacy & Security': 'Privacidad y Seguridad',
    'My Listings': 'Mis Anuncios',
    'Favorites': 'Favoritos',
    'Home': 'Inicio',
    'Search': 'Buscar',
    'Sell': 'Vender',
    'Reels': 'Reels',
    'Hi sujatha! 👋': '¡Hola sujatha! 👋',
    'Search products, sellers...': 'Buscar productos, vendedores...',
    'Items Sold': 'Artículos Vendidos',
    'Rating': 'Calificación',
    'Reviews': 'Reseñas',
    'Followers': 'Seguidores',
    'Following': 'Siguiendo',
    'Recent Activity': 'Actividad Reciente',
    'Account': 'Cuenta'
  },
  // Add more languages as needed
  fr: {}, de: {}, it: {}, pt: {}, ru: {}, zh: {}, ja: {}, ko: {}, hi: {}, te: {}, ta: {}
};

export const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <ThemeContext.Provider value={{darkMode, toggleDarkMode, language, setLanguage, t}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};