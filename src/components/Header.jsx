import { Link } from "react-router-dom"
import {HeaderNav} from '../componentsStyle.js'

export default function Header(){

    return(
        <>
            <HeaderNav>
                <Link to='/'>HOME</Link>
                <Link to='/produto'>PRODUTOS</Link>
                <Link to='/login'>LOGIN</Link>
            </HeaderNav>
        </>
    )
}