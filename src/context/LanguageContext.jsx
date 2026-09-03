import React, { createContext, useState, useContext } from 'react';

const getInitialLanguage = () => {
  const saved = localStorage.getItem('language');
  return saved === 'en' ? 'en' : 'es';
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'es' ? 'en' : 'es';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};