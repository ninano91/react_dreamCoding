import { createContext, useState } from 'react';

export const DarkModeContext = createContext();
// context 는 Provider가 꼭 필요하다
// context : 데이터를 담고있음
// Provider : 데이터를 잘 가지고 있는 우산?!
export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}
