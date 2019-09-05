import {useEffect} from 'react';
import {useLocalStorage } from './useLocalStorage';

export const useDarkMode3 = () => {
    const [darkMode3, setDarkMode3] = useLocalStorage('mode');
    useEffect(() => {
const page = window.document.body

if ( darkMode3 === true){
    page.classList.add('dark-mode3')
    
}else{
    page.classList.remove('dark-mode3')
    
}


},[darkMode3]);

return[darkMode3, setDarkMode3];

};