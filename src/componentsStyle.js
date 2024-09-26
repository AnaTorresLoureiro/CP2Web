import styled from "styled-components";

export const HeaderNav = styled.header`
    width: 100%;
    height: 6vh;
    display: flex;
    position: absolute;
    z-index: 5;
    justify-content: end;
    margin-top: 2%;
    a{
        align-content: center;
        justify-self: center;
        text-decoration: none;
        padding: 5px;
        color: black;
        font-size: 20px;
        font-weight: bold;
        margin-right: 5%;
        border-radius: 10px;
        transition: background-color 0.5s ease;
    }

    a:hover{
        background-color: #8b0000;
        color: #fff0d5;
    }
`

export const SecFooter = styled.footer`
    min-height: 15vh;
    background-color: black;
    border-radius: 25px 25px 0px 0px;

    a{
        color: #fff0d5;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
    }

`