import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

//Definiendo funcion que se ejecutara al cargarse el componente por primera vez
//Cambia el estado del "initialState"
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    //useReducer
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    //Efecto secundario que se ejecutara cada vez que cambie los todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        //console.log(id);
        
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        //console.log(id);
        
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id
        });
    }

    //Funcion que solo se encarga de retornar la cantidad de todos pendientes
    const pendientes = () => {
        const todosPendientes = todos.filter((todo) => todo.done === false);
        return todosPendientes.length;
    }

    return {
        todos,
        handleNewTodo, 
        handleRemoveTodo,
        handleToggleTodo,
        pendientes
    }
}
