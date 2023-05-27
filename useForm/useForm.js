//Custom Hook para el manejo de formularios

import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    
    const [formState, setFormState] = useState( initialForm );
   
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        //console.log({ name, value });

        //Sobre-escribiendo el state (formState)
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }
    
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
