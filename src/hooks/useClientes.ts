import { useState, useEffect } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import Cliente from '../core/Cliente';
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from './useTabelaOuForms';

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { exibirFormulario, exibirTabela, formularioVisivel, tabelaVisivel } = useTabelaOuForm();

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(() => {
        obterTodos();
    }, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    {/* 
  const clientes = [
      new Cliente('Ana', 34, '1'),
      new Cliente('Bia', 45, '2'),
      new Cliente('Carlos', 23, '3'),
      new Cliente('Pedro', 54, '4'),
    ]
*/}

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }
    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
    }

    function novoCliente() {
        setCliente(Cliente.vazio)
        exibirFormulario()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        selecionarCliente,
        excluirCliente,
        obterTodos,
        tabelaVisivel,
        formularioVisivel,
        exibirTabela
    }
}