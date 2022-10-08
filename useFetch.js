import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    //Estado Inicial de este custom hook
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    //Funcion que se va a ejecutar en el useEffect
    const getFetch = async() => {
        
        //Cada vez que se llame a esta funcion se va a resetear el "state"
        setState({
            ...state,
            isLoading: true
        });
        
        //Realizano peticion a api
        const resp = await fetch(url);
        const data = await resp.json();

        //Modificando el "state" con los nuevos valores
        setState({
            data,
            isLoading: false,
            hasError: null
        });
    }

    //Funcion que se va a ejecutar cada vez que cambie la url
    useEffect(() => {
        getFetch();
    }, [url]);
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
