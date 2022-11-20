import { React, useEffect, useState, forwardRef, useRef } from 'react';
import './AlredyWatched.css';

export default forwardRef(function AlredyWatched (props, refAlredyWatched) {
    const [arrayAlredyWatched, setArrayAlredyWatched] = useState([]);
    const [titleAndImageAfterRequest, setTitleAndImageAfterRequest] = useState([]);

    let saveArrayWithObjects = useRef({savedValues: localStorage.getItem("informations-content")});

    useEffect(() => {
        if (saveArrayWithObjects.current.savedValues === null || saveArrayWithObjects.current.savedValues === undefined) {
            saveArrayWithObjects.current.savedValues = localStorage.setItem("informations-content", JSON.stringify([]));
            saveArrayWithObjects.current.savedValues = JSON.parse(localStorage.getItem("informations-content"));
            // se no localStorage não estiver salvo array aqui ele se torna array
        }
        
        if (saveArrayWithObjects.current.savedValues.length > 0) {
            saveArrayWithObjects.current.savedValues = JSON.parse(localStorage.getItem("informations-content"));
            setTitleAndImageAfterRequest(saveArrayWithObjects.current.savedValues);
            // pega os valores salvos e faz com que não sejam subsituidos novamente por um array vazio
        }
        // verifica se array esta vazio ou indefinido
    }, []);

    useEffect(() => {
        if (titleAndImageAfterRequest.length < 8 && titleAndImageAfterRequest.length !== 0) {
            saveArrayWithObjects.current.savedValues = JSON.parse(localStorage.getItem("informations-content"));
            saveArrayWithObjects.current.savedValues = localStorage.setItem("informations-content", JSON.stringify(titleAndImageAfterRequest));
            saveArrayWithObjects.current.savedValues = JSON.parse(localStorage.getItem("informations-content"));
            setArrayAlredyWatched(saveArrayWithObjects.current.savedValues);
            // adicina novos item até o tamanho do array ser 8
        }

        if (saveArrayWithObjects.current.savedValues.length === 7 || titleAndImageAfterRequest.length === 7) {
            let takesLastObjectAndOverwritesItInTheArray = titleAndImageAfterRequest.pop();
            titleAndImageAfterRequest.splice(0, 0, takesLastObjectAndOverwritesItInTheArray);
            titleAndImageAfterRequest.pop(); 

            saveArrayWithObjects.current.savedValues = localStorage.setItem("informations-content", JSON.stringify(titleAndImageAfterRequest));
            saveArrayWithObjects.current.savedValues = JSON.parse(localStorage.getItem("informations-content"));
            setArrayAlredyWatched(saveArrayWithObjects.current.savedValues);
            // pega o ultimo objeto do array, coloca em primerio e joga os outros para "tras"
            // recebe o array com 7 items e nao adiciona mais nenhum apenas tira os já existentes e adiciona os novos pelos novos itens
        } 
        // função que remaneja array antes de completar length 7 aumenta itens no array, ao chegar em 8 itens apenas
        // apaga alguns e aduciona outros itens. 
        // o array fica salvo no local storage.
    }, [titleAndImageAfterRequest]);


    useEffect(() => {
        if (typeof props.titles === "string" && typeof props.images === "string") {
            setTitleAndImageAfterRequest(prevValue => [...prevValue, {title: props.titles, pathImage: props.images}]);
        } 
    }, [props.titles, props.images]); //envia novo titulo e caminho da imagem para array que salva os valores em um array de objetos

    return(
        <div className="content-watched" ref={refAlredyWatched}>
            <div className="container-content-watched">
                <h2>Assistidos recentemente</h2>
                <div className="white-line"></div>
                {
                    arrayAlredyWatched.length === 0
                    ? <h4 className="array-alredy-watched-empty">NENHUM CONTÉUDO FOI ASSITIDO AINDA</h4>
                    : <div className="align-content-watched">
                    {
                        arrayAlredyWatched.map((content, index) => (
                        <div key={index} className="organize-content-watched" title="Filme ou Série já assistidas">
                        <h4>{content.title}</h4>
                        <img src={`https://image.tmdb.org/t/p/original${content.pathImage}`} alt="capa"/> 
                        </div>))
                    }
                </div>
                }
            </div>
        </div>
    );
})
