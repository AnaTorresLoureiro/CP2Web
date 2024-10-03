import { useState, useEffect } from "react";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({ produto: "", preco: "", descricao: "" });

  // Fetch para listar os produtos já cadastrados
  useEffect(() => {
    fetch("http://localhost:5000/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  // Função para cadastrar novo produto
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoProduto),
    })
    .then((res) => res.json())
    .then((produto) => {
      setProdutos([...produtos, produto]);
      setNovoProduto({ produto: "", preco: "", descricao: "" });
    })
    .catch((error) => console.error("Erro ao cadastrar produto:", error));
  };

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>{produto.produto} - R$ {produto.preco}</li>
        ))}
      </ul>

      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Produto"
          value={novoProduto.produto}
          onChange={(e) => setNovoProduto({ ...novoProduto, produto: e.target.value })}
        />
        <input
          type="number"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={(e) => setNovoProduto({ ...novoProduto, preco: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={novoProduto.descricao}
          onChange={(e) => setNovoProduto({ ...novoProduto, descricao: e.target.value })}
        />
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
};

export default Produtos;
