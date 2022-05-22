/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

import './cliente.css'


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        let estilo = ``

        return (
            <>

            <div className='row'>
                <div className='col s12 m12 l6 estilo'>
                    <div className="box">
                        <h5>Masculino</h5>
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Matheus Sakuragui</td>
                                    <td>matheus.sakuragui@gmail.com</td>
                                    <td>12 12345-6789</td>
                                </tr>
                                <tr>
                                    <td>Rikio Anzai</td>
                                    <td>rikio.anzai@gmail.com</td>
                                    <td>12 23456-7890</td>
                                </tr>
                                <tr>
                                    <td>Rodrigo de Andrade</td>
                                    <td>rodrigo.andrade@gmail.com</td>
                                    <td>12 34567-8901</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='col s12 m12 l6 estilo'>
                    <div className="box">
                        <h5>Feminino</h5>
                            <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Gizeli Martin Fonseca</td>
                                    <td>gizeli.fonseca@gmail.com</td>
                                    <td>12 45678-9012</td>
                                </tr>
                                <tr>
                                    <td>Maria Clara Alves de Faria</td>
                                    <td>maria.alves@gmail.com</td>
                                    <td>12 56789-0123</td>
                                </tr>
                                <tr>
                                    <td>Evora de Castro</td>
                                    <td>evora.castro@gmail.com</td>
                                    <td>12 67890-1234</td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>


                    <div className='col s12 m12 l4 estilo'>
                        <div className="box">
                            <h5>Top 10 que mais consumiram</h5>
                            <h6>por quantidade</h6>
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
                        <h5>Top 10 que menos consumiram</h5>
                        <h6>por quantidade</h6>
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
                        <h5>Top 10 que mais consumiram</h5>
                        <h6>por valor</h6>
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