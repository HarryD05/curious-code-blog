import React, { createContext, useState, useEffect } from 'react';

export const ViewContext = createContext();

export default (props) => {
  const { children } = props;

  const [isMin, setIsMin] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const width = window.visualViewport.width;
    const threshold = 475;

    setIsMin((width < threshold));

    if (localStorage.getItem('dark') !== undefined) {
      const darkMode = localStorage.getItem('dark');
      if (darkMode === 'false') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('dark', 'false');
        setIsDark(false);
      } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('dark', 'true');
        setIsDark(true);
      }
      return;
    }
  }, []);

  window.onresize = () => {
    const width = window.visualViewport.width;
    const threshold = 475;

    setIsMin((width < threshold));
  }

  const getIsDark = () => {
    return isDark;
  }

  const setDark = bool => {
    setIsDark(bool);
    localStorage.setItem('dark', bool);

    if (isDark === true) {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }

  }

  const getIsMin = () => {
    return isMin;
  }

  return (
    <ViewContext.Provider value={{ getIsDark, setDark, getIsMin }}>
      {children}
    </ViewContext.Provider>
  )
}