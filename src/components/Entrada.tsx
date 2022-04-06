interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
}

export default function Entrada(props: EntradaProps){
    return(
        <div>
            <label>
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text' }
                value={props.valor}
                readOnly={props.somenteLeitura}
            />
        </div>
    )
}