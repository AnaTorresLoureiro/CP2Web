import styled from "styled-components";

export const MainHome = styled.main`
    flex-grow: 1;
    .banner{
        display: flex;
        justify-content: center;
    }

    .texto{
        position: absolute;
        z-index: 2;
        margin-top: 6%;
        width: 30%;
        color: whitesmoke;
        font-size: 35px;
        margin-left: 3%;
    }

    .marcas{
        color: white;
        margin-top: 5%;
    }

    .txt{
        display: flex;
        justify-content: center;
    }

    h2{
        margin-top: 4%;
        font-size: 30px;
        color: white;
        text-align: center;
        padding: 10px;
        width: 500px;
        border: 5px solid white;
    }

    .info{
        display: flex;
        justify-content: space-around;
        margin-top: 10%;
        margin-bottom: 5%;
    }

    .vantagem{
        color: white;
        margin-bottom: 20%;
    }

    .vantagem h1{
        width: 15%;
    }

    .assistir{
        display: flex;
        margin-bottom: 2%;
    }

    .video h1{
        color: white;
        width: 350px;
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




