import styled from "styled-components";

export const HeaderNav = styled.header`
    width: 100%;
    min-height: 5vh;
    display: flex;
    position: absolute;
    z-index: 5;
    justify-content: center;

    a{
        justify-self: center;
        text-decoration: none;
        padding: 5px;
        margin-left: 30px;
        color: white;
        font-size: 22px;
        font-weight: bold;
        border-radius: 10px;
        transition: background-color 0.5s ease;
    }

    a:hover{
        background-color: #8b0000;
        color: #ff9489;
    }

    img{
        width: 100px;
    }

`

export const SecFooter = styled.footer`
    min-height: 15vh;
    background-color: #8a0015;
    border-radius: 25px 25px 0px 0px;
    display: flex;
    justify-content: space-evenly;

    a{
        color: #fff0d5;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        margin-top: 15%;
    }

    iframe{
      margin-top: 2%;
    }

`
