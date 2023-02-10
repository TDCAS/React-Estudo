import cadastro from "../../../cadastro"


export default function Header(){
    return (
        <header className="banner">
            <ul className="block"> 
                <li> 
                    <a href="./forum.html" target="_top">Forum</a>
                    
                </li>
                <li>
                    <a href="loja.html" target="_top">Loja</a>
                </li>

                <li>
                    <button className="b1"> <a href="./login.html" target="_top">Login</a></button>
                </li>
                        
                <li>
                    <button className="b1"> <a href="/cadastro/" >Cadastro</a></button>
                </li> 
            </ul>
        </header>
    )
}