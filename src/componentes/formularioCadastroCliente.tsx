import { Component } from "react";

import "./formulario.css"

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light #9575cd deep-purple lighten-2 ${this.props.tema}`
        return (
            <div className="row caixa">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Nome</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Sobrenome</label>
                        </div>
                        <select className="browser-default input-field col s12 ">
                            <option value="" disabled selected>Gênero</option>
                            <option value="1">Feminino</option>
                            <option value="2">Masculino</option>
                        </select>
                        <div className="input-field col s12">
                            <input id="telefone" type="text" className="validate" />
                            <label htmlFor="telefone">Telefone</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">E-mail</label>
                        </div>

                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}