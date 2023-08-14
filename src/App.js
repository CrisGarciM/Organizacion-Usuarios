import { useState } from 'react';
import { v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MIOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrar,actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://avatars.githubusercontent.com/u/113933187?v=4",
    nombre: "Pruebas 1",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://avatars.githubusercontent.com/u/113933187?v=4",
    nombre: "Cristian Garcia",
    puesto: "Desarrollador de software ",
    fav: true
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://avatars.githubusercontent.com/u/113933187?v=4",
    nombre: "Pruebas 2",
    puesto: "Instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://avatars.githubusercontent.com/u/113933187?v=4",
    nombre: "Pruebas 3",
    puesto: "Dev e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://avatars.githubusercontent.com/u/113933187?v=4",
    nombre: "Pruebas 4",
    puesto: "Dev FullStack",
    fav: false
  }])

  //lista de equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])

  const cambiarMostrar = () =>{
    actualizarMostrar( !mostrar)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    //Spread operato (...) hace una copia de un arreglo
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar");
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Craer equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  //estado like
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }


  return (
    <div>
      <Header />
      { mostrar === true ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo} /> : <></>}
      <MiOrg  cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)} 
        eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} like={like} />)
      }
      <Footer />
    </div>
  );
}

export default App;
