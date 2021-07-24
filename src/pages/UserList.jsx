import './UserList.css'
import { useEffect, useState } from 'react'
import axios from "axios"


// FUNÇÃO PARA TRAZER DADOS DA API
// useEffect PARA NÃO TRAZER UM LOOP DE GET DOS DADOS 
function UserList() {
    let [tarefas, setTarefas] = useState([])
    useEffect(() => {
        axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce', {
            method: 'GET',
        }).then((resp) => {setTarefas(resp.data)})
    }, [])

// RETURN PARA RRERNDERIZAR CONTEÚDO
    return (
        <>
        {tarefas.map((t, index) => {
            return (
        <div className="background">
            <div className="user-container" key={'user'+index}>
                <div className="user-wrapper">
                    <img className="user-thumbnail" src={t.img} alt=""/>
                    <div className="user-data">
                        <p>Nome do Usuário {t.name}</p>
                        <p>ID: {t.id} - Username: {t.username}</p>
                    </div>
                    <button>PAGAR</button>
                </div>
            </div>
        </div>
            )
        })}
      </>
    );
}


export default UserList;
