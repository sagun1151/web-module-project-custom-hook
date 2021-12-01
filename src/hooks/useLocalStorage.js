import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const item = localStorage.getItem(key);

    const [value, setValue] = useState(()=>{
        return item ? JSON.parse(item) : initialValue
    //     if(localStorage.getItem(key)){
    //         return JSON.parse(localStorage.getItem(key));
    //     }
    //     else {
    //         localStorage.setItem(key, initialValue)
    //         return (initialValue);
    //     }
    });
    const setStored = (value) => {
        localStorage.setItem(key, value);
        setValue(value);
    }

    return [value, setStored]; 
}

export default useLocalStorage;