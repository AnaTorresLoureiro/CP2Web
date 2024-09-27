import { Link } from "react-router-dom"
import {HeaderNav} from '../componentsStyle.js'

export default function Header(){

    return(
        <>
            <HeaderNav>
                <div className="links">
                    <Link to='/'>HOME</Link>
                    <Link to='/login'>LOGIN</Link>
                </div>
            </HeaderNav>
        </>
    )
}