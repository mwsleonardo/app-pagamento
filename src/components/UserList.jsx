import './UserList.css'
import axios from "axios"
import { useEffect, useState } from 'react'



function Users() {

    let [usuarios, setUsuarios] = useState([])
    let [usuarioSelecionado, setUsuarioSelecionado] = useState({})
    let [visibleModal, setVisibleModal] = useState(false)
    let [visibleModalReceipt, setShowModalRecibo] = useState(false)


    // Função GET extraindo dados da API
    
    useEffect(() => {
        axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce', {
            method: 'GET',
        }).then((resp) => {setUsuarios(resp.data)})
    }, [])

    
    let cards = [

        // Cartão válido
        {
          card_number: '1111111111111111',
          cvv: 789,
          expiry_date: '01/18',
        },

        // Cartão inválido
        {
          card_number: '4111111111111234',
          cvv: 123,
          expiry_date: '01/20',
        },
    ];


    let showModal = (e, i) => {
        setUsuarioSelecionado(usuarios[i])
        setVisibleModal(true)
    }

    let showModalRecibo = (e) => {
        setShowModalRecibo(true)
    }


    // POST para realizar o envio dos dados do pagamento

    let enviarPagamento = (e) => {
        e.preventDefault()

        const card = document.getElementById('card').value
        const valueInput = document.getElementById('valor').value
        const paymentSucces = document.getElementById('payment_succes')
        const paymentError = document.getElementById('payment_error')

      
        if (card === 'card0') {
            axios.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', {
                "card_number": '1111111111111111',
                "cvv": 789,
                "expiry_date": '01/18',
                "destination_user_id": usuarioSelecionado.id,
                "value": valueInput
            })

            showModalRecibo(true)
            paymentError.innerHTML = ""
            
        } else {

            showModalRecibo(true)
            paymentSucces.innerHTML = ""
        }
    }

    function refreshPage(){
        window.location.reload()
    }

   // Conteúdo que será renderizado

 
    return (
        <>
            {usuarios.map((u, index) => {
                return (
                <div className="user_container" key={'user'+index}>
                    <div className="user_content">
                        <img src="" alt="" />
                        <img className="user_thumbnail" src={u.img} alt=""/>
                        <div className="user_infos">
                            <p>Nome do Usuário: {u.name}</p>
                            <p>ID: {u.id} - Username: {u.username}</p>
                        </div>
                        <button data-index={index} onClick={(e) => showModal(e, index)}>PAGAR</button>
                    </div>
                </div>
                )
            })}

            <div className="backdrop" style={{display: (visibleModal ? 'block' : 'none')}} onClick={() => setVisibleModal(false)}></div>
            <div className="modal_box" style={{display: (visibleModal ? 'block' : 'none')}}>
                <div className="modal_title">
                    <p>   Pagamento para <span>{usuarioSelecionado.name}</span></p>
                </div>
                <form action="" className="modal_form">
                    <input name="valor" type="number" id="valor" placeholder="R$ 0,00" required></input>
                    <select name="card" id="card" required>
                        <option value="">Selecione o cartão</option>
                        {cards.map((card, index) =>
                            <option value={'card'+index} key={'card'+index}>Cartão com final {card.card_number.substr(-4)}</option>
                        )}
                    </select>
                    <button className="modal_button" onClick={(e) => enviarPagamento(e)}>PAGAR</button>
                </form>
            </div>
            
            <div className="modal_box" style={{display: (visibleModalReceipt ? 'block' : 'none')}}>
                <div className="modal_title">
                    <p>Recibo de pagamento</p>
                </div>
                <div className="modal_content">
                    <h2 id="payment_succes">O pagamento foi concluído com sucesso</h2>
                    <h2 id="payment_error">O pagamento não foi concluído com sucesso</h2>
                    <button onClick={refreshPage}>Concluir Transação</button>
                </div>
            </div>
        </>
    );
}

export default Users;