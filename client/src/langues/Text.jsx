import { useContext } from 'react';
import { LanguageContext } from './langues';

export function Text({ tid, i }) {
    const languageContext = useContext(LanguageContext);
    return ((i !== -1)&&languageContext.dictionary[tid][i]) || languageContext.dictionary[tid] || tid;
};