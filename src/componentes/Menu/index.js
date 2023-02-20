import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu (props) {
    let activeStyle = {
        textDecoration: "underline",
      };

    return (
        <nav className={styles.menu}>
            <ul className={styles.menuContainer}>
                <li>
                    <NavLink
                        to="/pagamentos"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined}
                    >
                        Início
                    </NavLink>
                </li>
                <li className={styles.menuAtivo}>
                    {props.children}
                </li>
            </ul>
        </nav>
    )
}