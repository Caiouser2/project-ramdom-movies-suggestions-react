import React, { useState, useEffect, forwardRef } from 'react';
import SendRequestApi from '../components/SendRequestApi';
import ImageAndInformation from './ImageAndInformation';
import Overview from './Overview';
import Api from '../services/Api';
import './VisualContentApi.css';

const VisualContentApi = forwardRef((props, refVisualContent) => {
    function onScrollListHeader() {
        props.onActiveScroll(0, 35, 1900); //send to function in App.js
    }

    //section show dynamic content API on screen 
    const [contentApi, setContentApi] = useState([]);

    const [selectedOptionOfUserMovieOrTvShow, setSelectedOptionOfUserMovieOrTvShow] = useState(''); 

    async function selectedOption(option) {
        setSelectedOptionOfUserMovieOrTvShow(option); //option return true or false, option === true > movie; option !== true > TvShows
        await props.selectedMovieorTvShow(option);
    }
 
    async function content(actualContent) {
        setContentApi(actualContent);
        await props.returnedId(actualContent.id);
    }
    //section get episode number
    const [seasonAndEpisodeTvShows, setSeasonAndEpisodeTvShows] = useState({number_of_episodes:'Não informado', number_of_seasons:'Não informado',});

    useEffect(() => {
        if (selectedOptionOfUserMovieOrTvShow === false && typeof contentApi.id === "number") {
            async function requestIformationTvShows() {
                await Api 
                .get(`https://api.themoviedb.org/3/tv/${contentApi.id}?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-BR`)
                .then((response) => {
                    setSeasonAndEpisodeTvShows(response.data)
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                })
            }
            requestIformationTvShows();
        } 
    },[contentApi.id, selectedOptionOfUserMovieOrTvShow]);

    useEffect(() => {
        if (typeof contentApi.title === "string" || typeof contentApi.name === "string") {
            props.titlesSendToReciveTitle(contentApi.title || contentApi.name || undefined);
        }
        // send title to App
    },[contentApi.name, contentApi.title, props]);

    useEffect(() => {
        if (contentApi.poster_path !== '') {
            props.SendPathImageOfContent(contentApi.poster_path || undefined);
        }

        // send poster path to App
    },[contentApi.poster_path, props]);

    //section active loanding and active errors  
    const [activeLoading, setActiveLoading] = useState('nonActive');

    function chargeTime() {
        setActiveLoading('active')
        timeCounter()
    }

    function timeCounter() {
        setTimeout(() => {
            setActiveLoading('nonActive');
        }, 3200);
    }

    const [error, setError] = useState(null);

    function activeError(errorFun) {
        setError(errorFun);
    }

    return(
        <div className="container-visual-content" ref={refVisualContent}>
            <ImageAndInformation reciveActivation={activeLoading}
            title={
                selectedOptionOfUserMovieOrTvShow
                ? contentApi.title
                : contentApi.name
            }
            yearOfContent={
                contentApi.length === 0
                ? ''
                : selectedOptionOfUserMovieOrTvShow
                ? contentApi.release_date 
                : contentApi.first_air_date
            }
            verifyObejectEmpty={
                contentApi.length === 0
                ? false
                : true
            }
            adultContent={
                selectedOptionOfUserMovieOrTvShow
                ? true
                : false
            }
            image={contentApi.poster_path}
            idGenre={
                contentApi.genre_ids === undefined
                ? [] 
                : contentApi.genre_ids 
            }
            activeRequestProvidersList={selectedOptionOfUserMovieOrTvShow}
            idContentRequestProvidersList={contentApi.id}
            numberOfEpisodes={seasonAndEpisodeTvShows.number_of_episodes}
            numberOfSeasons={seasonAndEpisodeTvShows.number_of_seasons}
            tvShowInProduction={seasonAndEpisodeTvShows.in_production}/>

            <div className="sinopse-and-form">
                <Overview warningError={error} overview={contentApi.overview}/>
                <SendRequestApi onActiveScroll={onScrollListHeader} onActiveLoading={chargeTime} emptySelect={activeError} optionSelected={selectedOption} reciveContentApi={content}/>
                <h5><span>⚠️</span> ANTES DE ASSITIR QUALQUER OBRA SUGERIDA VERIFIQUE A CLASSIFICAÇÃO INDICATIVA</h5>
            </div>
        </div>
    );
});

export default VisualContentApi;