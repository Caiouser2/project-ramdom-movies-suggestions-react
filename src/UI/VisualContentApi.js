import React, { useState } from 'react';
import { useEffect } from 'react';
import SendRequestApi from '../components/SendRequestApi';
import ImageAndInformation from './ImageAndInformation';
import Overview from './Overview';
import './VisualContentApi.css';

const VisualContentApi = (props) => {
    //scrollY when click button
    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
      
        const easeInOutQuart = (time, from, distance, duration) => {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };
      
        const timer = setInterval(() => {

            const time = new Date().getTime() - startTime;
            const newX = easeInOutQuart(time, startX, distanceX, duration);
            const newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                clearInterval(timer);
            }
            window.scroll(newX, newY);
        }, 1000 / 60); 
    }

    //section show dynamic content API on screen 
    const [contentApi, setContentApi] = useState([]);

    const [selectedOptionOfUserMovieOrTvShow, setSelectedOptionOfUserMovieOrTvShow] = useState(''); 

    function selectedOption(option) {
        setSelectedOptionOfUserMovieOrTvShow(option); //option return true or false, option === true > movie; option !== true > TvShows
        props.selectedMovieorTvShow(option);
    }
 
    async function content(actualContent) {
        setContentApi(actualContent);
        await props.returnedId(actualContent.id);
    }


    useEffect(() => {
        props.titlesSentToReciveTitle(contentApi.title || contentApi.name);
        //send title app for use in trailer 
    },[contentApi.name, contentApi.title, props],1);

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
        <div className="container-visual-content">
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
            idContentRequestProvidersList={contentApi.id}/>

            <div className="sinopse-and-form">
                <Overview warningError={error} overview={contentApi.overview}/>
                <SendRequestApi onActiveScroll={smoothScrollTo} onActiveLoading={chargeTime} emptySelect={activeError} optionSelected={selectedOption} reciveContentApi={content}/>
                <h5><span>⚠️</span> ANTES DE ASSITIR QUALQUER OBRA SUGERIDA VERIFIQUE A CLASSIFICAÇÃO INDICATIVA</h5>
            </div>
        </div>
    );
};

export default VisualContentApi;