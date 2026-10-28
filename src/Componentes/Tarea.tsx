
export type TareaType ={
    id: string,
    titulo: string,
    isCompleted: boolean
}

export default function Tarea({infoTarea, cambiarCompletado, borrarTarea, editarTarea}:{infoTarea: TareaType, cambiarCompletado: Function, borrarTarea: (id: string) => void, editarTarea: (id: string, nuevoTitulo: string) => void}){

    function cambiarTitulo(){
        const nuevoTitulo = prompt("Nuevo título:", infoTarea.titulo);

        if(nuevoTitulo !== null){
            editarTarea(infoTarea.id, nuevoTitulo);
        }
    }

    return <li>
        <input type="checkbox" checked={infoTarea.isCompleted} onChange={()=>(cambiarCompletado(infoTarea.id))}/>
        <span style={{textDecoration: infoTarea.isCompleted == true ? 'line-through' : 'none'}}>{infoTarea.titulo}</span>
        <button onClick={cambiarTitulo}>Editar</button>
        <span onClick={()=>{borrarTarea(infoTarea.id)}} style={{color: 'red'}}> x </span>
    </li>

}
