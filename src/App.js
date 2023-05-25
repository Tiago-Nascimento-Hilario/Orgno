
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import {v4 as uuidv4 } from 'uuid';

function App() {

  const times = [
    { 
      id: uuidv4(),
      nome:'Programação',
      corPrimaria:'#57c278',
      corSecundaria:'#d9f7e9'
    },

    { 
      id: uuidv4(),
      nome:'Frontend',
      corPrimaria:'#82cffa',
      corSecundaria:'#e8f8ff'
    },

    { 
      id: uuidv4(),
      nome:'Data Science',
      corPrimaria:'#a6d157',
      corSecundaria:'#f0f8e2'
    },

    { 
      id: uuidv4(),
      nome:'Devops',
      corPrimaria:'#e06b69',
      corSecundaria:'#fde7e8'
    },

    { 
      id: uuidv4(),
      nome:'Ux e Design',
      corPrimaria:'#d86ebf',
      corSecundaria:'#fff5d9'
    },

    { 
      id: uuidv4(),
      nome:'Mobile',
      corPrimaria:'#feba05',
      corSecundaria:'#fff5d9'
    },

    { 
      id: uuidv4(),
      nome:'Inovação',
      corPrimaria:'#ff8a29',
      corSecundaria:'#ffeedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  function novoColaboradorCadastrado(colaborador) {
    console.log(colaborador) 
    setColaboradores([...colaboradores, colaborador])    
  }
  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador=> colaborador.id != id))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
          colaboradorCadastrado = {colaborador=> novoColaboradorCadastrado(colaborador)}/>
     
     {times.map(time => <Time 
                          key={time.nome} 
                          nome={time.nome} 
                          corPrimaria={time.corPrimaria} 
                          corSecundaria={time.corSecundaria}
                          colaboradores={colaboradores.filter(colaborador=> colaborador.time === time.nome)}
                          deletar={deletarColaborador}/>)
                          }

    </div>
  );
}

export default App;
