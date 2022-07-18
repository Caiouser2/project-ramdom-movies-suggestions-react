import './Trailer.css';

export default function Trailer(props) {
    return(
        <div className="container-videos">
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
                <iframe 
                src={
                    props.videos.results.length !== 0 
                    ? props.videos.results[0].site === 'YouTube' ? `https://www.youtube.com/embed/${props.videos.results[0].key}` : `https://vimeo.com/${props.videos.results[0].key}`
                    : null //colocar video de como usar o site, fazer video quando colocar a opção de avaliar filme ou série
                } 
                title="Trailer do filme ou série"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
            <h5>Aviso: séries e filmes antigos raramente contém trailers.</h5>
        </div>
    );
}