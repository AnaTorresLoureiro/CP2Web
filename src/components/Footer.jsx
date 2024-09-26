import { SecFooter } from "../componentsStyle"
import { Link } from "react-router-dom"

export default function Footer(){

    return(
        <>
        <SecFooter>
            <h2>footer</h2>
            <Link to='/sobre'>Sobre nós</Link>
        </SecFooter>
        </>
    )
}