import { useEffect, useReducer } from "react";

import { todoReducer } from "../08-useReducer/todoReducer";


//Estado inicial del reducer
const initialState = [];


//3er argument del reducer(todoReducer) que le da forma al initialState
const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}


export const useTodo = () => {
    
    //Manejador del estate del componente
    const [todos, dispatch] = useReducer( todoReducer, initialState, init );


    //Efecto que se va a ejecutar cada vez que cambie el state "todos"
    useEffect(() => {
        //Crea en el localStorage un array (todos) con los valores del state "todos"
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    //Funcion que manejara la creacion de un nuevo todo
    const handleNewTodo = ( todo ) => {
        //console.log({ todo });

        //Creando la action con los valores a enviar al reducer
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        //Enviando el "action" al reducer (todoReducer)
        dispatch( action );
    }

    //Funcion que manejara la eliminacion de un todo
    const handleDeleteTodo = ( id ) => {
        //console.log(`estas eliminando el todo ${ id }`);

        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatch( action );
    }


    const handleToggleTodo = ( id ) => {
        //console.log(id);

        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatch( action );

        console.log( todos );
    }

    const todosCount = todos.length;

    const penddingTodosCount = todos.filter((todo) => ( !todo.done )).length;

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        penddingTodosCount
    }
}
