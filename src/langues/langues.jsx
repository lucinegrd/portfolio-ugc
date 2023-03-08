import fr from './fr.json';
import en from './en.json';
import { useState } from 'react';
import { createContext } from 'react';


export const dictionaryList = { fr, en };

export const LanguageContext = createContext({
  userLanguage: 'fr',
  dictionary: dictionaryList.fr
});

export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState('fr');
  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    setUserLanguage
  }
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

