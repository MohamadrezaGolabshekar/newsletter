import { useState, useEffect } from "react";

const getStorageValue = (key: string, defaultValue: any) => {
    // getting stored value
    const saved: any = localStorage.getItem(key);
    let initial;
    try {
        initial = JSON.parse(saved);
    } catch (e) {
        initial = defaultValue;
    }
    return initial || defaultValue;
}

const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;