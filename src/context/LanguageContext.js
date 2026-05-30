import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'react-native-localize';

export const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr');
  const locales = getLocales();
  const deviceLanguageCode = locales?.[0]?.languageCode;

  const selectedLanguage = lang => {
    AsyncStorage.setItem('language', JSON.stringify(lang));
    switch (lang) {
      case 'de':
        setLanguage('de');
        break;
      case 'en':
        setLanguage('en');
        break;
      case 'tr':
        setLanguage('tr');
        break;

      default:
        break;
    }
  };

  const initial = async () => {
    try {
      let languageInfo = await AsyncStorage.getItem('language');
      languageInfo = JSON.parse(languageInfo);

      if (!!languageInfo) {
        setLanguage(languageInfo);
      } else {
        const defaultLanguage =
          deviceLanguageCode === 'tr'
            ? 'tr'
            : deviceLanguageCode === 'de'
            ? 'de'
            : 'en';
        setLanguage(defaultLanguage);
      }
    } catch (error) {}
  };

  useEffect(() => {
    initial();

    return () => {
      setLanguage('tr');
    };
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        selectedLanguage,
        language
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
