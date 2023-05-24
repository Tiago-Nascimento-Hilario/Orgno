import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props)=>{

function campoPreenchido(evento) {
    props.alteracaoDeDados(evento.target.value)      
}

    return (
        <div>
            <label className="campo-texto">{props.label}</label>
            <input value={props.dados} onChange={campoPreenchido} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto