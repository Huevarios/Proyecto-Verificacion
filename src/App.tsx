
import { useState } from "react"
import Tarea, { type TareaType} from "./Componentes/Tarea";
import { actualizarTareas, validarTarea } from "./logica";

export default function App() {

  const [tareas, setTareas] = useState<TareaType[]>([]);
  const [texto, setTexto] = useState('');

  function cambiarCompletado(id: string){
    const tareasActualizadas = actualizarTareas(tareas, id);
    setTareas(tareasActualizadas);
  }

  function editarTarea(id: string, nuevoTitulo: string){
    if(nuevoTitulo.trim() == "") return;

    const tareasActualizadas = actualizarTareas(tareas, id, nuevoTitulo);
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
    const nuevasTareas = validarTarea(texto, tareas);
    if(nuevasTareas){
      setTareas(nuevasTareas);
      setTexto('');
    }
  }

  return <main>
     <h1>Dia de Muertos</h1>
     <h2>Pendientes: {checarPendientes()}</h2>

     <input type="text" value={texto} onChange={(e)=>{setTexto(e.target.value)}}/>
     <button onClick={agregarTarea}>Agregar tarea</button>

     <ul>
      {tareas.map((t)=><Tarea key={t.id} infoTarea={t} cambiarCompletado={cambiarCompletado} borrarTarea={borrarTarea} editarTarea={editarTarea}/>)}
     </ul>

    </main>

}