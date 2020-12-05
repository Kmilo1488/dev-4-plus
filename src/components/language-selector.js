import React, { useContext, useEffect } from 'react';
import { languageOptions } from '../languages';
import { LanguageContext } from '../containers/language';
import { MenuItem, TextField } from '@material-ui/core';
import EnICon from '../images/Languajes/en.svg'
import EsICon from '../images/Languajes/es.svg'
import styled from "styled-components"


const ImageIcon = styled.img`
  height: 20px;
`

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


    <TextField
      select
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, languaje]) => (
        <MenuItem key={id} value={languaje}>
          <ImageIcon src={languaje === "en" ? EnICon : EsICon} />
        </MenuItem>
      ))}
    </TextField>
  );
};