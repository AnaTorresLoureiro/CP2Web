import { SecFooter } from "../componentsStyle"
import { Link } from "react-router-dom"

export default function Footer(){

    return(
        <>
        <SecFooter>
        <iframe
            style={{ borderRadius: '12px',border: 'none' }}
            src="https://open.spotify.com/embed/track/5iJfzXKvQXlYOBtEQhEmpA?utm_source=generator&theme=0"
            width="30%"
            height="400"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            allowFullScreen
      ></iframe>
            <Link to='/sobre'>Sobre nós</Link>
        </SecFooter>
        </>
    )
}