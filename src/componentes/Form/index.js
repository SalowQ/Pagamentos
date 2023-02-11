import { useState } from 'react';
import Popup from '../Popup';
import styles from './Form.module.css';

export default function Form(props) {
    const [value, setValue] = useState('');

    function mascaraValor(evento) {
        const onlyDigits = evento.target.value
              // Transformando a String digitada em uma Array
            .split("")
              // Filtrando a Array e pegando apenas o que for digito
            .filter(s => /\d/.test(s))
              //Juntando tudo na Array em uma String
            .join("")
              // Adicionado os zeros
            .padStart(3, "0");
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
        evento.target.value = maskCurrency(digitsFloat);
        }
        function maskCurrency(valor, locale = 'pt-BR', currency = 'BRL') {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency
        }).format(valor)
    }

    let cartoes = [
        {
          card_number: '1111111111111111',
          cvv: 789,
          expiry_date: '01/18',
        },
        {
          card_number: '4111111111111234',
          cvv: 123,
          expiry_date: '01/20',
        },
      ];

    const [cartao, setCartao] = useState(cartoes[0]);
    const [validacao, setValidacao] = useState('Espere um momento...');
    const [ativarPopup, setAtivarPopup] = useState(false);
    
    const handleSubmit = event => {
      event.preventDefault();
      setAtivarPopup(true)
      fetch('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989',{
        method: 'POST',
        body: JSON.stringify({
          card_number: cartao.card_number,
          cvv: cartao.cvv,
          expiry_date: cartao.expiry_date,
          destination_user_id: props.id,
          value: parseFloat(value.replace(/[R$ ]/g, ' ').replace(/[.]/g, '').replace(/[,]/g, '.'))
        })
      })
      .then((res) => console.log(res.json()))
      .then(() => {
        if (cartao.card_number === '1111111111111111'){
          setValidacao('Pagamento concluído com sucesso!')
        }
        if (cartao.card_number === '4111111111111234'){
          setValidacao('Seu cartão não foi aceito. Por favor, tente novamente.')
        }
      })
      .catch((err) => {
        alert(`Seu pagamento não pôde ser concluído! - ${err}`)
      })
    }
  
    return (
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input 
                className={styles.formCampo} 
                type='text' 
                name='type-value' 
                placeholder='R$ 0,00'
                onInput={evento => mascaraValor(evento)}
                onChange={value => setValue(value.target.value)}
                value={value} 
                required
            >
            </input>
            <select 
              className={styles.formCampo} 
              name='cartao-selecionado'
              onChange={value => setCartao(JSON.parse(value.target.value))}
            >
                {cartoes.map(card =>
                <option key={card.cvv} value={JSON.stringify(card)}>
                    {`Cartão com o final ${card.card_number.slice(-4)}`}
                </option>
                )}
            </select>
            <button className={styles.formCampo} type="submit">
                Pagar
            </button>
          </form>
          <Popup trigger={ativarPopup} setTrigger={setAtivarPopup}>
              <h1>{validacao}</h1>
          </Popup>
        </div>
    )
}