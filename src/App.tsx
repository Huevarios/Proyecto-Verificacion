import { useState } from "react"
import Tarea, { type TareaType} from "./Componentes/Tarea";

export default function App() {

  const [tareas, setTareas] = useState<TareaType[]>([]);
  const [texto, setTexto] = useState('');

  function cambiarCompletado(id: string){
   
    const tareasActualizadas = tareas.map((tarea)=>{
      if(tarea.id == id) {
        return {...tarea, isCompleted: !tarea.isCompleted}
      }else {
        return tarea;
      }
    })

    setTareas(tareasActualizadas);
  }

  function borrarTarea(id: string) {

    setTareas(tareas.filter((t)=> t.id != id))
  }

  function checarPendientes() {
    let arreglo = tareas.filter((t)=>t.isCompleted == false)
    return arreglo.length
  }

  function agregarTarea(){
    if(texto == '') return;
    setTareas([...tareas, {id: crypto.randomUUID(), titulo: texto, isCompleted: false}])

    setTexto('');
  }

  return <main>
     <h1>Dia de Muertos</h1>
     <h2>Pendientes: {checarPendientes()}</h2>

    <input type="text" value={texto} onChange={(e)=>{setTexto(e.target.value)}}/>
     <button onClick={agregarTarea}>Agregar tarea</button>

     <ul>
      {tareas.map((t)=><Tarea key={t.id} infoTarea={t} cambiarCompletado={cambiarCompletado} borrarTarea={borrarTarea}/>)}
     </ul>

    </main>

}