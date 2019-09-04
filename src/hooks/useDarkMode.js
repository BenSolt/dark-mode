import {useEffect} from 'react';
import {useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('mode');
    useEffect(() => {
const page = window.document.body

if ( darkMode === true){
    page.classList.add('dark-mode')
    page.classList.add('dark-mode2')
}else{
    page.classList.remove('dark-mode')
    page.classList.remove('dark-mode2')
}


},[darkMode]);

return[darkMode, setDarkMode];

};