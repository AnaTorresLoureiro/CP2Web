import styled from "styled-components";

export const HeaderNav = styled.header`
    background-color: #8a0015;
    color: #fff;
    display: flex;
    position: absolute;
    max-width: 900px;
    margin-left: 43%;
    border-radius: 0 0 60px 60px; /* Bordas arredondadas */
    clip-path: polygon(0 0, 100% 0, 89% 90%, 11% 90%); /* Faz as bordas serem triangulares */


        .links {
            display: flex;
            gap: 20px;
        }

        .links a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            font-size: 16px;
            padding: 10px 20px;
            background-color: transparent;
            transition: color 0.3s;
        }

        .links a:hover {
            color: black; 
        }
`;

export const SecFooter = styled.footer`
    background-color: #333; 
    color: #fff; 
    padding: 20px; 
    text-align: center; /

    .footer-content {
        display: flex;
        flex-direction: column; 
        align-items: center;
    }

    .spotify-embed {
        width: 80%; 
        height: 85px; 
        border-radius: 10px; 
        margin-bottom: 20px; 
    }

    .footer-links {
        margin: 10px 0; 
        display: flex; 
        justify-content: center; 
        gap: 15px; 
    }

    .sobre-link,
    .contato-link,
    .servicos-link,
    .faq-link,
    .social-link {
        color: white; 
        text-decoration: none; 
        transition: color 0.3s; 
    }

    .sobre-link:hover,
    .contato-link:hover,
    .servicos-link:hover,
    .faq-link:hover,
    .social-link:hover {
        color: black; 
    }

    .footer-info {
        margin-top: 20px; 
        font-size: 14px; 
    }

    .social-icons {
        display: flex; 
        justify-content: center; 
        gap: 15px; 
        margin-top: 5px; 
    }
`;
