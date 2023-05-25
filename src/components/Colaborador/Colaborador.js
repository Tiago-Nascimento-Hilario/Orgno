import {AiFillCloseCircle} from 'react-icons/ai'
import './Colaborador.css'

function Colaborador({nome, imagem, cargo, corDeFundo, deletar, colaborador}) {
  return (
    <div className="colaborador">
        <AiFillCloseCircle 
                  size={25} 
                  className='deletar' 
                  onClick={()=> deletar(colaborador.id)} />

        <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}></img>
        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
  )
}

export default Colaborador