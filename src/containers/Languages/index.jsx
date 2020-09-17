import React, { useState, createContext, useContext } from 'react'; 

import { dictionaryList } from '../../languages/index';
import { languageOptions } from '../../languages/index';

// create the language context with default Selected language.
export const LanguageContext = createContext({
  userLanguage: 'eng',
  dictionary: dictionaryList.eng
});

// it provides the language context to app
export function LanguageProvider ({children}) {
  const [userLanguage, setUserLanguage] = useState('eng');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : 'eng'
      setUserLanguage(newLanguage);
      window.localStorage.setItem('rcml-lang', newLanguage)
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

// get text according to id & current language.
export function Text ({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
};