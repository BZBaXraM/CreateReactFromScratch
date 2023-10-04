import React, {useEffect} from "react";
import {useGetShipsQuery} from "./Redux/api";
import Paragraph from "./Compoments/Paragraph";

[useGetShipsQuery]

const App = () => {
    const {data, isLoading} = useGetShipsQuery();

    useEffect(() => {

        if (isLoading) return;

        console.log(data)
    }, [isLoading]);

    return (
        <Paragraph text={isLoading ? "LOADING…" : "Bahram"}/>
    )
}

export default App;