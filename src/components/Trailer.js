import { forwardRef } from 'react';
import './Trailer.css';

const Trailer = forwardRef((props, refTrailer) => {
    // const callbackFun = useCallback(() => (
    //    <iframe
    //     src={
    //         props.videos.results.length !== 0 
    //         ? props.videos.results[0].site === 'YouTube' ? `https://www.youtube.com/embed/${props.videos.results[0].key}` : `https://vimeo.com/${props.videos.results[0].key}`
    //         : null //colocar video de como usar o site, fazer video quando colocar a opção de avaliar filme ou série
    //         } 
    //     title="Trailer do filme ou série"
    //     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //     allowFullScreen></iframe>
    // ),[props.videos.results.length]); verificar desempenho e talvez aplicar essa callback function

    return(
        <div className="container-videos" ref={refTrailer}>
            <div className="align-title-videos">
                <h2> 
                    {
                        props.videos.results.length !== 0
                        ? props.videos.results[0].name
                        : `Nenhum vídeo relacionado a: ${props.titles === undefined ? '...' : props.titles}`
                    }
                </h2>
            </div>
            <div className="container-trailer">
                {
                    props.videos.results.length !== 0
                    ? <iframe
                    src={
                        props.videos.results.length !== 0 
                        ? props.videos.results[0].site === 'YouTube' ? `https://www.youtube.com/embed/${props.videos.results[0].key}` : `https://vimeo.com/${props.videos.results[0].key}`
                        : null //colocar video de como usar o site, fazer video quando colocar a opção de avaliar filme ou série
                        } 
                    title="Trailer do filme ou série"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                    : <div className="iframe-null"></div> 
                }
            </div>
            <h5>Aviso: alguns filmes e séries não contém trailers.</h5>
        </div>
    );
})

export default Trailer;