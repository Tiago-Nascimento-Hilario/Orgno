import './Botao.css'

function Botao(props){
    return(
        <button className='Botao'>
            {props.children}
        </button>
    )
}
export default Botao