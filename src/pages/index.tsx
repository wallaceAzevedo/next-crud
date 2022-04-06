import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ]

  function clienteSeleciocado(cliente: Cliente){

  }
  function clienteExcluido(cliente: Cliente){

  }
  
  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout titulo="Cadastro Simples" >
        <div className="flex justify-end mb-4">
        <Botao className="mb-4" cor="green" >Novo Cliente</Botao>
        </div>
        {/*
        <Tabela clientes={clientes} 
        clienteSelecionado={clienteSeleciocado} 
        clienteExcluido={clienteExcluido}
        ></Tabela>
        */}
        <Formulario/>
      </Layout>
    </div>
  )
}
