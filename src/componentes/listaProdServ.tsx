import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
}

export default class ListaProdServ extends Component<props> {
    render() {

        return (
            <>
            <div className='row'>
                <div className='col s12 m12 l6 estilo'>
                    <div className="box">
                        <h5>Produtos</h5>
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                </tr>
                                <tr>

                                </tr>
                                <tr>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='col s12 m12 l6 estilo'>
                    <div className="box">
                        <h5>Serviços</h5>
                            <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Serviço</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                </tr>
                                <tr>

                                </tr>
                                <tr>

                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>

                <div className='col s12 m12 l4 estilo'>
                    <div className="box">
                        <h5>Produtos e serviços mais consumidos</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>

                <div className='col s12 m12 l4 estilo'>
                    <div className="box">
                    <h5>Produtos e serviços mais consumidos</h5>
                    <h6>pelo público masculino</h6>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='col s12 m12 l4 estilo'>
                    <div className="box">
                    <h5>Produtos e serviços mais consumidos</h5>
                    <h6>pelo público feminino</h6>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}