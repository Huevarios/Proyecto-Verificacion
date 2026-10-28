import type { TareaType } from "./Componentes/Tarea";


export function actualizarTareas(tareas: TareaType[], id: string, nuevoTitulo?: string) {
    try {
        return tareas.map((tarea) => {
            if(tarea.id === id) {
                if(nuevoTitulo !== undefined) {
                    return {...tarea, titulo: nuevoTitulo}
                }else {
                    return {...tarea, isCompleted: !tarea.isCompleted}
                }
            }else {
                return tarea;
            }
        })
    } catch (error) {
        return tareas;
    }
}


export function validarTarea(titulo: string, tareas: TareaType[]) {

    if(titulo == "") return null;
    const caracteres = [".", ",", "1"];
    let caracterInvalido = false;

    caracteres.forEach((c)=>{
        if(titulo.includes(c)) {
            caracterInvalido = true;
        }
        return;
    })

    if(caracterInvalido) return null;
    if(typeof titulo != "string") return null;

    let seRepite = false;

    for(let i = 0; i < tareas.length; i++) {
        if(tareas[i].titulo.toLowerCase() == titulo.toLowerCase()) {
            seRepite = true;
            break;
        }
    }

    if(seRepite) return null;

    return [...tareas, {
        titulo: titulo,
        id: crypto.randomUUID(),
        isCompleted: false
    }];
}
