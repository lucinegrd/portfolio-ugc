import { useContext } from 'react';
import { LanguageContext } from './langues';
import '../styles/Selector.css'

export default function Selector() {
    const { userLanguage, setUserLanguage } = useContext(LanguageContext);

    const handleLanguageChange = e => {
        setUserLanguage(e);
    }
    console.log(userLanguage)
    return (
        <div className={"fr"=== userLanguage ? 'Selector fr_first' : 'Selector en_first'}>
            <button
                className={"fr"=== userLanguage ? "Selector_langue Selector_selected" : "Selector_langue"}
                onClick={() => handleLanguageChange("fr")}>
                FR</button>
            <button
                className={"en"=== userLanguage ? "Selector_langue Selector_selected" : "Selector_langue"}
                onClick={() => handleLanguageChange("en")}>
                EN</button>

        </div>
        /*<select
            onChange={handleLanguageChange}
            value={userLanguage}
        >
            {Object.entries(languageOptions).map(([id, name]) => (
                <option key={id} value={id}>{name}</option>
            ))}
        </select>*/
    );
};