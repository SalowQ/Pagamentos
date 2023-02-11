import React from 'react'
import styles from './Popup.module.css';

function Popup(props) {
  return (props.trigger) ? (
    <div className={styles.popup}>
        <div className={styles.popupContainer}>
            {props.children}
            {/*<button className={styles.popupFechar} onClick={() => props.setTrigger(false)}>Fechar</button>*/}
        </div>
    </div>
  ) : "";
}

export default Popup