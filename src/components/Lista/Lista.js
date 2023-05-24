import'./Lista.css'

function Lista(props){

    return(
        <div>
            <label className='Lista'>{props.label}</label>
            <select 
                onChange={evento => props.alteracaoDeDados(evento.target.value)}
                value={props.dados}
                >
                {props.itens.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>                
        </div>
    )
}

export default Lista