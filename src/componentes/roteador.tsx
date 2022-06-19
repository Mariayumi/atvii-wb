import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProdServ from "./listaProdServ"
import FormularioCadastroProdServ from "./formularioCadastroProdServ"

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#9575cd deep-purple lighten-2" botoes={['Clientes', 'Produtos & Serviços', 'Cadastro de Clientes', 'Cadastro de Produtos/Serviços']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        } /*else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdServ tema="purple lighten-4" />
                </>
            )
        }*/ else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProdServ tema="purple lighten-4" />
                </>
            )
        } 
        
        

    }
}