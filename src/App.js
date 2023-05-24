
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';
import Colaborador from './components/Colaborador/Colaborador';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57c278',
      corSecundaria:'#d9f7e9'
    },

    {
      nome:'Frontend',
      corPrimaria:'#82cffa',
      corSecundaria:'#e8f8ff'
    },

    {
      nome:'Data Science',
      corPrimaria:'#a6d157',
      corSecundaria:'#f0f8e2'
    },

    {
      nome:'Devops',
      corPrimaria:'#e06b69',
      corSecundaria:'#fde7e8'
    },

    {
      nome:'Ux e Design',
      corPrimaria:'#d86ebf',
      corSecundaria:'#fff5d9'
    },

    {
      nome:'Mobile',
      corPrimaria:'#feba05',
      corSecundaria:'#fff5d9'
    },

    {
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
                          />)
                          }

    </div>
  );
}

export default App;
