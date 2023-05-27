import { useState } from "react";

export const useCounter = ( value = 10 ) => {
    
    const [counter, setCounter] = useState(value);

    const sumar = ( value = 1 ) => {
        setCounter( counter + value );
    }

    const restar = () => {
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter( value );
    }

    return {
        counter,
        sumar,
        restar,
        reset
    }
}
