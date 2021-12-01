import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);
    console.log(darkMode)

    
    return [darkMode, setDarkMode];
}

export default useDarkMode;