import styled from "styled-components"

export const SecSobreNos = styled.section`
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff; 
    padding: 30px;
    border: 4px solid #8a0015; 
    border-radius: 12px; 
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); 
    font-family: "Courier New", monospace; 
   
    
    h2 {
        font-size: 28px;
        margin-bottom: 20px;
        color: #8a0015; 
        margin-top: 2%;
        text-shadow: 0 0 5px #8a0015;
    }

    p {
        line-height: 1.6; 
        font-size: large;
        margin-bottom: 15px; 
        text-align: justify; 
    }

    ul {
        margin: 10px 0; 
        padding-left: 20px; 
    }

    strong {
        color: #8a0015; 
    }

    img{
        width: 400px;
    }
`;

