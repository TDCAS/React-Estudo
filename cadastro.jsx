import Header from "./src/componets/struture/header"
import cas from  "./src/style/cadasto/cadas.css"

export default function cadastro(){
    return (
        <body>

        
            <Header/>

            <form className="todo">
            
                <div className="nome">
                    <label>Nome</label>
                    <input type="text" name="nome"/>
                </div>
                <div className="senha">
                    <label>Senha</label>
                    <input type="password" name="senha"/>
                </div>
                <div className="genero">
                    <label >Genero</label>
                    <label >Masculino</label>
                    <input type="radio" name="genero"/>
                    <label >Feminino</label>
                    <input type="radio" name="genero"/>
                </div>
                <div className="documento">
                    <label>Documentos</label>
                    <label>Possui CNH</label>
                    <input type="checkbox" name="CNH"/>
                    <label>Possui passaporte</label>
                    <input type="checkbox" name="passaport"/>
                </div>
                <div className="carro">
                    <label>Qual seu carro</label><br/>
                    <select name="carro" multiple="multiple" id="">
                        <option value="1">Audi</option>
                        <option value="2">Mercedes</option>
                    </select>
                </div>
                <button className="b1">Login</button>
            </form>
        </body>
    )
}