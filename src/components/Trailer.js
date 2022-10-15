import { forwardRef } from 'react';
import './Trailer.css';

const Trailer = forwardRef((props, refTrailer) => {
    function hideComponentTrailer() {
        props.setFalseForHideComponentTrailer(false);
    }

    return(
        <div className="container-videos" ref={refTrailer} onClick={hideComponentTrailer}>
            <div className="background-with-opacity"/>
            <div className="container-trailer ">
            <h3>{ props.videos.results[0].name }</h3>
            <div className="align-name-video"></div>
                <iframe
                // src="https://www.youtube.com/embed/watch?v=kyhYDPleVzg"
                src={ props.videos.results.length !== 0 ? props.videos.results[0].site === 'YouTube' ? `https://www.youtube.com/embed/${props.videos.results[0].key}` : `https://vimeo.com/${props.videos.results[0].key}` : null } 
                title="Trailer do filme ou série"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
        </div>
    );
})

export default Trailer;