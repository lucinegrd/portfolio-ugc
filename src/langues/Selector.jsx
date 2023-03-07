import { useContext } from 'react';
import { languageOptions, LanguageContext } from './langues';

export default function Selector() {
    const { userLanguage, setUserLanguage } = useContext(LanguageContext);
    // set selected language by calling context method
    const handleLanguageChange = e => setUserLanguage(e.target.value);
    return (
        <select
            onChange={handleLanguageChange}
            value={userLanguage}
        >
            {Object.entries(languageOptions).map(([id, name]) => (
                <option key={id} value={id}>{name}</option>
            ))}
        </select>
    );
};