/* ================================================
    Este custom hook esta hecho con la finalidad de que 
    pueda ser usado en otros proyectos
================================================*/


import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue);

    const incrementar = ( value = 1 ) => {
        setCounter(counter + value);
    }

    const decrementar = ( value = 1 ) => {
        //Validacion
        //if(counter === 0) return;

        setCounter(counter - value);
    }

    const resetear = () => {
        setCounter(initialValue);
    }

    return {
        counter, 
        incrementar,
        decrementar,
        resetear
    }
}
