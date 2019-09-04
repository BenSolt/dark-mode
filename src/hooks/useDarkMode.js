import {useEffect} from 'react';
import {useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('mode');
    useEffect(() => {
const page = window.document.body

if ( darkMode === true){
    page.classList.add('dark-mode')
    
}else{
    page.classList.remove('dark-mode')
   
}


},[darkMode]);

return[darkMode, setDarkMode];

};