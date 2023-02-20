import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Popup.module.css';

function Popup(props) {

  return (props.trigger) ? (
    <div className={styles.popup}>
        <div className={styles.popupContainer}>
            {props.children}
            {props.popup && <button 
              className={styles.popupFechar} 
              onClick={() => props.setTrigger(false)}
            >
              <NavLink 
                to="/pagamentos"
              >
                {props.botao}
              </NavLink>
            </button>}
        </div>
    </div>
  ) : "";
}

export default Popup