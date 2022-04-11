import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const { selecionarCliente, excluirCliente, cliente, clientes, novoCliente, salvarCliente, tabelaVisivel, formularioVisivel, exibirTabela } = useClientes();

  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout titulo="Cadastro Simples" >
        {tabelaVisivel && (
          <>
            <div className="flex justify-end mb-4">
              <Botao className="mb-4" cor="green"
                onClick={novoCliente}
              >Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        )}
        {formularioVisivel && (
          <Formulario cliente={cliente}
            clienteMudou={salvarCliente}
            canselado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
