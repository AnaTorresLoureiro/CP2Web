import { SecFooter } from "../componentsStyle"
import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer(){

    return(
        <>
        <SecFooter>
        <div className="footer-content">
                <iframe
                    className="spotify-embed"
                    src="https://open.spotify.com/embed/track/5iJfzXKvQXlYOBtEQhEmpA?utm_source=generator&theme=0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    allowFullScreen
                ></iframe>
                <div className="footer-links">
                    <Link to='/sobre' className="sobre-link">Sobre nós</Link>
                    <Link to='/contato' className="contato-link">Contato</Link>
                    <Link to='/servicos' className="servicos-link">Serviços</Link>
                    <Link to='/faq' className="faq-link">Perguntas Frequentes</Link>
                </div>
                <div className="footer-info">
                    <p>&copy; 2024 Tokyo Drift. Todos os direitos reservados.</p>
                    <p>Conecte-se conosco nas redes sociais:</p>
                    <div className="social-icons">
                        <Link to='/facebook' className="social-link">
                            <FaFacebookF className="social-icon" />
                        </Link>
                        <Link to='/instagram' className="social-link">
                            <FaInstagram className="social-icon" />
                        </Link>
                        <Link to='/twitter' className="social-link">
                            <FaTwitter className="social-icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </SecFooter>

        </>
    )
}