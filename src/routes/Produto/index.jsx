import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ImCancelCircle } from "react-icons/im"

// const MainProduto = styled.main`
//     flex-grow: 1;
//     padding: 20px;

//     h1 {
//         text-align: center;
//         color: #8a0015;
//         text-shadow: 0 0 5px #8a0015;
//         margin-bottom: 20px;
//     }

//     form {
//         background-color: #000;
//         color: #fff;
//         padding: 40px;
//         border-radius: 10px;
//         margin: 40px auto;
//         max-width: 600px;
//         box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
//         font-family: "Courier New", monospace;
//     }

//     div {
//         margin-bottom: 20px;
//     }

//     label {
//         display: block;
//         margin-bottom: 5px;
//         font-weight: bold;
//     }

//     input, textarea {
//         width: 100%;
//         padding: 10px;
//         border: 2px solid #8a0015;
//         border-radius: 5px;
//         background-color: #333;
//         color: #fff;
//         font-size: 16px;
//     }

//     input:focus, textarea:focus {
//         border-color: #ff4d4d; /* Cor de destaque ao focar no input */
//         outline: none;
//     }

//     button {
//         background-color: #8a0015;
//         color: white;
//         padding: 10px 20px;
//         border: none;
//         border-radius: 5px;
//         cursor: pointer;
//         font-size: 18px;
//         transition: background-color 0.3s ease;
//     }

//     button:hover {
//         background-color: #ff4d4d; /* Cor de destaque ao passar o mouse */
//     }
// `;

const CadUsuarios =()=>{

    //Hook- useParams- serve para receber da rota ou gerar o codigo
    let {id} =useParams();

    //Hook - useState - Manipula o estado da variavel
     const [produtos,setProdutos]= useState({
        id,
        produto:'',
        preco:'',
        descricao:''
     });


    //Hook- useNavigate- Redireciona para outro componente
    const navigate = useNavigate();

    function validar() {
        return produtos.produto.trim() !== "" && produtos.preco.trim() !== "" && produtos.descricao.trim() !== "";
      }
      const produtoExiste = (nomeProduto) => {
        return produtos.some(
          (produto) => produto.produto.toLowerCase() === nomeProduto.toLowerCase()
        );
      };

    //criando a função handleChange
     // spred(...) -pega o valor novo e junta com os valores ja cadastrados dentro de um array ou objeto
     //evento target - captura o que foi digitado em um campo input
     const handleChange=(e)=>{
        setProdutos({...produtos,[e.target.name]: e.target.value});
     }

     //criando a variavel metodo para criar e alterar

     let metodo = "post";
     if(id){
        metodo = 'put'
     }

     //criando a função handleSubmit

     const handleSubmit=(e)=>{
        //previne que ocorra qualquer modificação no form ex. load
        e.preventDefault();

        if (produtoExiste(produtos.produto)) {
            alert("Este produto já está cadastrado!");
            return;
          } else{        fetch(`http://localhost:5000/produtos/${id ? id :''}`,{
            method:metodo,
            headers: {
                'Content-type':'application/json',
            },
            //prepara para receber os dados em json
            body:JSON.stringify(produtos),
            //então se estiver tudo certo ele direciona para o componente que deseja
        })}

     }



    return (
        <section className="produtos">
            <h1>Cadastro de usuários</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="produto"
                    value={produtos.produto}
                    placeholder="Digite o produto"
                    /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="preco"
                    value={produtos.preco}
                    placeholder="Digite o preço"
                    /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="descricao"
                    value={produtos.descricao}
                    placeholder="Digite a descriçao do produto"
                    /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                    onChange={handleChange}
                />

                <button type="submit">Cadastrar</button>
            </form>

        </section>
    )
}
export default CadUsuarios



