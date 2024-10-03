// Componente para cadastrar novos usuários
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
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
    </div>
  );
};

export default CadUsuarios;
