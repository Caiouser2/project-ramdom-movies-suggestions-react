import './WatchSuggestedContent.css';
import Api from '../services/Api';
import { useState } from 'react';
import { useEffect } from 'react';

export default function WatchSuggestedContent(props) {
    const [linkWatchContent, setLinkWatchContent] = useState({});
    const [messageAboutJustWatch, setMessageAboutJustWatch] = useState('hide');
    const [arrowMoreInformations, setArrowMoreInformations] = useState('arrow-down');

    function visibleMessage() {
        if (messageAboutJustWatch === 'hide') {
            setTimeout(() => {setMessageAboutJustWatch('show')}, 150);
        } else {
            setTimeout(() => {setMessageAboutJustWatch('hide')}, 150);
        }

        if (arrowMoreInformations === 'arrow-up') {
            setArrowMoreInformations('arrow-down');
        } else {
            setArrowMoreInformations('arrow-up');
        }
    }

    let selectedOptionUser = '';

    if (props.sendRequest === true) {
        selectedOptionUser = 'movie';
    } else {
        selectedOptionUser = 'tv';
    }

    useEffect(() => {
        async function getWatchProviders() {
            if (typeof props.id === "number") {
                await Api
                .get(`/${selectedOptionUser}/${props.id}/watch/providers?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&include_video_language&language=pt-BR`)
                .then ((response) => {
                    setLinkWatchContent(response.data.results.BR.link);
                })
                .catch((err) => {
                    if (props.id === null || props.activeRequestProvidersList === null) {
                        setLinkWatchContent(false);
                    } else {
                        setLinkWatchContent(undefined);
                    }
                })
            } else {
                setLinkWatchContent(false);
            }
        }
        getWatchProviders();
    }, [props.id, selectedOptionUser, props.activeRequestProvidersList])


    function redirectWatchContent() {
        if(typeof linkWatchContent === "string") {
            window.open(linkWatchContent, '_blank');
        }
    }

    function renderLogo() {
        if (typeof linkWatchContent === "string") {
            return <div className="align-logo-tmdb" onClick={redirectWatchContent}> <img  src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'} alt="sem imagens no momento"/> </div>
        } else {
            return null
        }
    }

    function renderText() {
        if (typeof linkWatchContent === "string") {
            return <a href={linkWatchContent} rel="noreferrer" target="_blank">Assitir agora</a>; 
        } else {
            return <h3>Não disponível no Brasil</h3>;
        }
    }

    function renderArrowMoreInformationAboutJustWatch() {
        if (typeof linkWatchContent === "string") {
            return <div  className="container-icon-more-and-less" onClick={visibleMessage} title="Botão, clique para saber mais sobre o redirecinamento"> <button type="button" className={ arrowMoreInformations + " icon-more-and-less"}></button></div>;
        } else {
            return null; 
        }
    }

    function renderInformationsAboutJustWatch() {
        if (typeof linkWatchContent === "string") {
            return <div className={ messageAboutJustWatch + " warning-content-justwatch-text"} title="Explicação sobre redirecionamento"><h5>Ao clicar em assitir agora você será redircionado para o site do THE MOVIE DATABASE, onde atravéz das informações fornecidas pelo site JustWatch você pode escolher qual serviço usar para assistir a obra sugerida de forma legal. Para mais informações visitar <a href="https://www.justwatch.com/">JustWatch</a>.</h5></div>;
        } else {
            return null; 
        }
    }
    
    return(
        <div className="container-option-watch" >
            { linkWatchContent === false ? null : renderLogo() }
            { linkWatchContent === false ? null : renderText() }
            { linkWatchContent === false ? null : renderArrowMoreInformationAboutJustWatch() } 
            { linkWatchContent === false ? null : renderInformationsAboutJustWatch() } 
        </div>
    );
}