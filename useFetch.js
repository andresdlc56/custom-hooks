import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const [click, setClick] = useState(false);

    const getQuote = async() => {
        
        setState({
            ...state,
            isLoading: true
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        });

        //setClick(false);
    }

    const newQuote = () => {
        setClick(!click);
    }

    useEffect(() => {
        getQuote()
    }, [click]);
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        newQuote
    }
}
