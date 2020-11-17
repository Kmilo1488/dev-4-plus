import React, { useContext, useEffect } from 'react';
import Select from '@material-ui/core/Select';

import { languageOptions } from '../languages';
import { LanguageContext } from '../containers/language';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = e => userLanguageChange(e.target.value);

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem('rcml-lang');
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <Select
      native
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, languaje]) => (
        <option key={id} value={id}>{languaje}</option>
      ))}
    </Select>
  );
};