import { useParams } from 'react-router-dom';
import Form from '../../componentes/Form';
import Menu from '../../componentes/Menu';

export default function Pagamento() {
    const usuarioPagamento = useParams();

    return (
        <main>
            <Menu>Pagamento para {usuarioPagamento.nome} </Menu>
            <h1>Pagamento</h1>
            <Form id={usuarioPagamento.id} nome={usuarioPagamento.nome}></Form>
        </main>
    )
}