import styled from "styled-components";

export const MainHome = styled.main`
    flex-grow: 1;
    .banner{
        display: flex;
        justify-content: center;
        border: 8px solid #8a0015;
    }

    .marcas{
        color: white;
        margin-top: 5%;
        margin-bottom: 10%;
    }

    .txt{
        display: flex;
        justify-content: center;
    }

    .txtM{
        text-align: center;
        margin-bottom: 5%;
        text-shadow: 0 0 5px #8a0015;
    }

    .buy{
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(3, 30%); 
        margin-top: 2%;
        gap: 20px;
    }

    .info{
        background-color: #000; 
        color: #fff; 
        padding: 40px;
        border-radius: 10px;
        margin: 40px auto;
        max-width: 1000px;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        text-align: center;
        font-family: "Courier New", monospace; 
        margin-bottom: 15%;
    }
    .hovers{
        display: flex;
        min-height: 40vh;
        justify-content: space-around;
        gap: 10px;
    }

    .VantagensTokyo {
        background-color: #000; 
        color: #fff; 
        padding: 40px;
        border-radius: 10px;
        margin: 40px auto;
        max-width: 1000px;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        text-align: center;
        font-family: "Courier New", monospace; 
}

    h2 {
        font-size: 28px;
        margin-bottom: 20px;
        color: #8a0015; 
        text-shadow: 0 0 5px #8a0015;
    }

    .vantagens-lista {
        list-style-type: none;
        padding: 0;
    }

    .vantagens-lista li {
        font-size: 18px;
        margin: 15px 0;
        padding: 10px;
        background-color: #333; 
        border-left: 5px solid #8a0015; 
        transition: all 0.3s ease;
    }

    .vantagens-lista li:hover {
        background-color: #8a0015; 
        color: #fff; 
        cursor: pointer;
    }

    .assistir{
        display: flex;
        margin-bottom: 2%;
    }

    .video h1{
        color: white;
        width: 350px;
        margin-bottom: 5%;
    }
    .line{
        width: 5px;
        height: 13vh;
        background-color: #8a0015;
        margin-left: 5%;
    }

    iframe{
        margin-left: 25%;
        margin-bottom: 8%;
    }
`




