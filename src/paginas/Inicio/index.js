import { useEffect, useState } from 'react';
import Card from '../../componentes/Card';
import Menu from '../../componentes/Menu';
import styles from './Inicio.module.css';

export default function Inicio() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

      useEffect(() => {
        fetch(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
        .then((usuariosRaw) => {
            if (!usuariosRaw.ok) {
              throw new Error(
                `Erro HTTP: O status é ${usuariosRaw.status}`
              );
            }
            return usuariosRaw.json();
          })
          .then((usuarios) => {
            setUsuarios(usuarios);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setUsuarios([]);
          })
          .finally(() => {
            setLoading(false);
          });
      }, );     

    return (
        <main>
            <Menu></Menu>
            <h1>Usuários</h1>
            <div className={styles.usuarios}>
                {loading && <div>Carregando...</div>}
                {error && (
                    <h2>{`Não foi possível carregar as informações dos usuários - ${error}`}</h2>
                )}
                {usuarios &&
                    usuarios.map(({ id, name, img, username}) => (
                        <Card key={id} id={id} nome={name} imagem={img} username={username}></Card>
                    ))}
            </div>
        </main>
    )
}