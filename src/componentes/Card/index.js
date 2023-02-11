import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card(props) {
    return (
        
        <div className={styles.card}>
            <img src={props.imagem} alt={`Imagem de ${props.nome}`}></img>
            <ul className={styles.cardContainer}>
                <li>{props.nome}</li>
                <li>{props.username}</li>
                <Link to={`/pagamento/${props.id}/${props.nome}`}>
                    <button>Pagar</button>
                </Link>
            </ul>
        </div>
    )
}