import stile from '../../style/home/homestyle.module.css'

export default function Header(){
    return (
        <header className={stile.banner}>
            <ul className={stile.block}> 
                <li> 
                    <a href="./forum.html" target="_top">Forum</a>
                    
                </li>
                <li>
                    <a href="loja.html" target="_top">Loja</a>
                </li>

                <li>
                    <button className={stile.b1}> <a href="./login.html" target="_top">Login</a></button>
                </li>
                        
                <li>
                    <button className={stile.b1}> <a href="/cadastro/" >Cadastro</a></button>
                </li> 
            </ul>
        </header>
    )
}