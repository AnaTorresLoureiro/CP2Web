import styled from 'styled-components';

// Estilização do componente Produto
const MainProduto = styled.main`
    flex-grow: 1;
    padding: 20px;

    h1 {
        text-align: center;
        color: #8a0015;
        text-shadow: 0 0 5px #8a0015;
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


export default function Produto() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const novoProduto = { nome, preco, descricao };

        try {
            const response = await fetch('http://localhost:3001/produtos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoProduto),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Produto cadastrado:', data);
                // Limpar os campos do formulário após o envio
                setNome('');
                setPreco('');
                setDescricao('');
            } else {
                console.error('Erro ao cadastrar produto');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <>
            <h1>Cadastrar Produto</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="preco">Preço:</label>
                    <input
                        type="number"
                        id="preco"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}