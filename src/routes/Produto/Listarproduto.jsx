import { useState, useEffect } from "react"
import{Link} from 'react-router-dom'
import { FaEdit, FaTrash} from 'react-icons/fa';

const Listarpodutos =()=>{

     //Hook - useState - Manipula o estado da variavel
     const [produtos,setProdutos]= useState([])


     // função deletar
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: 'delete',
    })
      .then(() => {
        window.location = '/listarprodutos';
      })
      .catch((error) => {
        console.log(error);
      });
  };


   //Hook- useEffect - carrega todo os usuarios cadastrados com uma promisse assincrona
   useEffect(() => {
    fetch('http://localhost:5000/produtos/')
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setProdutos(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); //callback retorna uma vez

    return (
        <section className='listarUsuario'>
        <h1>Lista de produtos</h1>
              <Link to="/cadUsuarios">Inserir Novo produto</Link>
              <Link to="/login" >Voltar</Link>
              <table>
                <thead>
                  <tr>           
                    <th>produto</th>
                    <th>preco</th>
                    <th>descricao</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {produtos.map((item,index) => (
                    <tr key={index}>
                     
                      <td>{item.produto}</td>
                      <td>{item.preco}</td>           
                      <td>{item.descricao}</td>           
                      <td></td>
                      <td>
                        <Link to={`/editarprodutos/${item.id}`}>
                          <FaEdit />
                        </Link>
                        <button onClick={handleDelete.bind(this, item.id)}>
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </section>
      )
    
}
export default Listarpodutos