export type TareaType ={
    id: string,
    titulo: string, 
    isCompleted: boolean
}

export default function Tarea({infoTarea, cambiarCompletado, borrarTarea}:{infoTarea: TareaType, cambiarCompletado: Function, borrarTarea: (id: string) => void}){
    return <li>
        <input type="checkbox" checked={infoTarea.isCompleted} onChange={()=>(cambiarCompletado(infoTarea.id))}/>
        <span style={{textDecoration: infoTarea.isCompleted == true ? 'line-through' : 'none'}}>{infoTarea.titulo}</span>
        <span onClick={()=>{borrarTarea(infoTarea.id)}} style={{color: 'red'}}> x </span>
        </li>

}