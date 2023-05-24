import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import Lista from "../Lista/Lista";
import "./Formulario.css";


function Formulario(props) {
  
  const times = [
    'Programação',
    'Frontend',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile', 
    'Inovação'
  ]

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')


  function click(evento){
    evento.preventDefault();
    props.colaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <section className="formulario">
      <form onSubmit={click}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <CampoTexto 
          label="Nome" 
          dados={nome} 
          alteracaoDeDados={dados =>setNome(dados)}
          placeholder="Dgite seu nome" />

        <CampoTexto
          label="Cargo" 
          dados={cargo}
          alteracaoDeDados={dados=>setCargo(dados)}
          placeholder="Dgite seu cargo" />

        <CampoTexto 
          label="Imagem"
          dados={imagem}
          alteracaoDeDados={dados => setImagem(dados)} 
          placeholder="Dgite sua imagem" />

        <Lista 
          label="Times"
          alteracaoDeDados={dados => setTime(dados)}
          dados={time}
          itens={times}/>


        <Botao>Criar card</Botao>
      </form>
  </section>
  );
}

export default Formulario;
