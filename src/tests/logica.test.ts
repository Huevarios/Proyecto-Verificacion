import { describe, it, expect } from "vitest";
import { actualizarTareas, validarTarea } from "../logica";

describe("actualizarTareas", ()=>{

    it("actualiza elementos correctamente", ()=>{
        expect(actualizarTareas([{id: "1234", titulo: "Prueba", isCompleted: false}], "1234")).toEqual([{id: "1234", titulo: "Prueba", isCompleted: true}]);
    })

    it("no hace cambios cuando el ID es invalido", ()=>{
        expect(actualizarTareas([], "1234")).toEqual([]);
        expect(actualizarTareas([{id: "1234", titulo: "Prueba", isCompleted: false}], "123")).toEqual([{id: "1234", titulo: "Prueba", isCompleted: false}]);
    })

    
    it("actualiza el titulo de una tarea", ()=>{
        const tareas = [
            {id: "1234", titulo: "Comprar pan", isCompleted: false}
        ];

        const resultado = actualizarTareas(tareas, "1234", "Comprar leche");

        expect(resultado).toEqual([
            {id: "1234", titulo: "Comprar leche", isCompleted: false}
        ]);
    })


})

describe("Agregar Tareas", ()=>{

    it("rechaza titulos existentes", ()=>{
        expect(validarTarea("prueba", [{id: "1234", titulo: "Prueba", isCompleted: false}])).toBeNull();
    })

    it("rechaza titulos vacios", ()=>{
        expect(validarTarea("", [])).toBeNull();
    })

})
