import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const DivLink = styled.div`
  margin-top: 1%;
  font-size: large;
  a{
    text-decoration: none;
    color: white;
    background-color: #8a0015;
    border-radius: 2px;

  }


`;  

const Table = styled.table`
  background-color: #8a0015;
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;

  a{
    text-decoration: none;
    font-size: large;
    color: #f2f2f2;
  }

  th, td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

const Button = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;

  &:hover {
    background-color: #e60000;
  }
`;

const EditLink = styled(Link)`
  color: #4CAF50;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    color: #45a049;
  }
`;

// Componente Listarprodutos
const Listarpodutos = () => {
  const [produtos, setProdutos] = useState([]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "delete",
    })
      .then(() => {
        window.location = "/listarpodutos";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/produtos/")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setProdutos(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="listarUsuario">
        <DivLink><Link to="/cadUsuarios">Inserir novo produto</Link></DivLink>
        <DivLink><Link to="/login">Voltar</Link></DivLink>

      <Table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((item, index) => (
            <tr key={index}>
              <td>{item.produto}</td>
              <td>{item.preco}</td>
              <td>{item.descricao}</td>
              <td>
                <EditLink to={`/editarprodutos/${item.id}`}>
                  <FaEdit />
                </EditLink>
                <Button onClick={handleDelete.bind(this, item.id)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Listarpodutos;
