import styled from "styled-components";

export const SecLogin = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: black; 
  color: #fff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3rem; 
  }


  .titulo-login {
    font-size: 3rem; 
    margin-bottom: 1.2rem; 
    font-weight: bold;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
  }

  .input-form {
    width: 100%;
    padding: 1rem;
    background: transparent; 
    border: 2px solid #fff;
    border-radius: 10px;
    outline: none;
    color: #fff;
    transition: 0.3s;
    font-size: 1rem;
  }

  .input-form:focus {
    border-color: #ff4500; 
    box-shadow: 0 0 10px #ff4500, 0 0 40px #ff4500;
  }

  .input-form::placeholder {
    color: #fff;
    opacity: 0.7;
  }

  .input-form:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .login-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px; 
  }

  .login-form-btn {
    padding: 1rem 2rem;
    background-color: #8b0000;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    overflow: hidden; 
  }

  .login-form-btn:hover {
    background-color: #ff4500;
    transform: scale(1.05);
  }

  .uteis {
    display: flex;
    flex-direction: column; 
    padding: 0.5rem 0;
    list-style: none;
    font-size: 0.9rem;
    color: #fff;
    text-align: center; 
    margin-top: 10px; 
  }

  .texto1 {
    cursor: pointer;
    color: #fff; 
    transition: color 0.3s;
  }

  .texto1:hover {
    color: #ff6347;
  }

  a {
    color: #fff; 
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #ff6347; 
  }

  @media (max-width: 768px) {
    .container {
      max-width: 90%;
      margin-top: 2rem; 
    }

    .titulo-login {
      font-size: 2rem; 
    }

    .container-login {
      padding: 1.5rem; 
    }
  }

  @media (max-width: 480px) {
    .titulo-login {
      font-size: 1.5rem; 
    }

    .input-form {
      padding: 0.8rem; 
    }
  }
  .banner{
        display: flex;
        justify-content: center;
        border: 8px solid #8a0015;
        width: 2000px;
    }
`;

export const SecCad = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: black; 
  color: #fff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  .usuario {
    background-size: cover; 
    background-position: center; 
    border-radius: 10px;
    padding: 50px; 
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    max-width: 500px; 
    width: 100%; 
    text-align: center;
    margin: 0 auto;
    border: 8px solid #8a0015;
  }

  h1 {
    font-size: 2.5rem; 
    margin-bottom: 1.2rem; 
    font-weight: bold;
    color: #fff;
    text-align: center;
  }

  input {
    width: 100%;
    padding: 1rem;
    background: transparent; 
    border: 2px solid #fff;
    border-radius: 10px;
    outline: none;
    color: #fff;
    transition: 0.3s;
    font-size: 1rem;
    margin-bottom: 15px; 
  }

  input::placeholder {
    color: #fff;
    opacity: 0.7;
  }

  input:focus {
    border-color: #ff4500; 
    box-shadow: 0 0 10px #ff4500, 0 0 40px #ff4500;
  }

  button {
    padding: 1rem 2rem;
    background-color: #8b0000;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    overflow: hidden; 
  }

  button:hover {
    background-color: #ff4500;
    transform: scale(1.05);
  }

  a {
    color: #fff; 
    text-decoration: none;
    transition: color 0.3s;
    display: inline-block; 
    margin-top: 20px; 
  }

  a:hover {
    color: #ff6347; 
  }

  @media (max-width: 768px) {
    .usuario {
      padding: 2rem; 
      max-width: 90%; 
    }

    h1 {
      font-size: 2rem; 
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem; 
    }

    input {
      padding: 0.8rem; 
    }
  }
  .banner{
        display: flex;
        justify-content: center;
        border: 8px solid #8a0015;
        width: 1000px;
    }
`;
