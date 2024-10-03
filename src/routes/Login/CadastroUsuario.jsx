// Componente para cadastrar novos usuários
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CadUsuarios = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoUsuario = { usuario, senha };
    
    // Envia os dados para a API
    fetch("http://localhost:5000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoUsuario),
    })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/login");  // Redireciona para a página de login
    })
    .catch((error) => {
      console.error("Erro ao cadastrar usuário:", error);
    });
  };

  const SecCad = styled.section`
    flex-grow: 1;
    padding: 20px;

    h1 {
        text-align: center;
        color: #8a0015;
        text-shadow: 0 0 5px #8a0015;
        margin-top: 8%;
        margin-bottom: 20px;
    }

    form {
        background-color: #000;
        color: #fff;
        padding: 40px;
        border-radius: 10px;
        margin: 40px auto;
        max-width: 600px;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        font-family: "Courier New", monospace;
    }

    div {
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    input, textarea {
        width: 100%;
        padding: 10px;
        border: 2px solid #8a0015;
        border-radius: 5px;
        background-color: #333;
        color: #fff;
        font-size: 16px;
    }

    input:focus, textarea:focus {
        border-color: #ff4d4d; /* Cor de destaque ao focar no input */
        outline: none;
    }

    button {
        background-color: #8a0015;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #ff4d4d; /* Cor de destaque ao passar o mouse */
    }
  `;

  return (
    <SecCad>
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </SecCad>
  );
};

export default CadUsuarios;
