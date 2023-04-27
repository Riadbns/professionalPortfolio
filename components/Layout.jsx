import Navbar from './Navbar';

import styles from '../styles/Layout.module.css';

import { useTheme } from './ThemeProvider';

export default function Layout({children}) {
    const [theme, setTheme] =useTheme();

    return <div data-theme={theme}>
        <Navbar />

        {children}

        {/* Footer ici si présent */}
    </div>
}