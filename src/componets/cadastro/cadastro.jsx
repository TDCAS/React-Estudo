import Header from "../struture/header"
import stile from '../.././style/cadasto/cadas.module.css'

export default function cadastro(){
    return (
        <body>

        <Header/>

            <form className={stile.allstruturebody}>
            
                <div className={stile.nome}>
                    <label>Nome</label>
                    <input type="text" name="nome"/>
                </div>
                <div className={stile.senha}>
                    <label>Senha</label>
                    <input type="password" name="senha"/>
                </div>
                <div className={stile.genero}>
                    <label >Genero</label>
                    <label >Masculino</label>
                    <input type="radio" name="genero"/>
                    <label >Feminino</label>
                    <input type="radio" name="genero"/>
                </div>
                <div className={stile.documento}>
                    <label>Documentos</label>
                    <label>Possui CNH</label>
                    <input type="checkbox" name="CNH"/>
                    <label>Possui passaporte</label>
                    <input type="checkbox" name="passaport"/>
                </div>
                <div className={stile.carro}>
                    <label>Qual seu carro</label><br/>
                    <select name="carro" multiple="multiple" id="">
                        <option value="1">Audi</option>
                        <option value="2">Mercedes</option>
                    </select>
                </div>
                <button className={stile.b1}>Login</button>
            </form>
        </body>
    )
}