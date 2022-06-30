import React, { useState } from 'react';
import SendRequestApi from '../components/SendRequestApi';
import ImageAndInformation from './ImageAndInformation';
import Overview from './Overview';
import './VisualContentApi.css';

const VisualContentApi = () => {
    const [contentApi, setContentApi] = useState([]);

    const [selectedOptionOfUserMovieOrTvShow, setSelectedOptionOfUserMovieOrTvShow] = useState(null); 

    function selectedOption(option) {
        setSelectedOptionOfUserMovieOrTvShow(option); //option return true or false, option === true > movie; option !== true > TvShows
    }
 
    function content(actualContent) {
        setContentApi(actualContent);
    }

    const [activeLoading, setActiveLoading] = useState('nonActive');

    function chargeTime() {
        setActiveLoading('active')
        timeCounter()
    }

    function timeCounter() {
        setTimeout(() => {
            setActiveLoading('nonActive')
        }, 3200);
    }

    const [error, setError] = useState(null)

    function activeError(errorFun) {
        setError(errorFun)
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
                selectedOptionOfUserMovieOrTvShow
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
            image={contentApi.poster_path}/>
            <div className="sinopse-and-form">
                <Overview warningError={error} overview={contentApi.overview}/>
                <SendRequestApi onActiveLoading={chargeTime} emptySelect={activeError} optionSelected={selectedOption} reciveContentApi={content}/>
            </div>
        </div>
    );
};

export default VisualContentApi