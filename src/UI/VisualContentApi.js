import React, { useState, useEffect, forwardRef } from 'react';
import SendRequestApi from '../components/SendRequestApi';
import MoreInformationAboutContent from '../components/MoreInformationAboutContent';
import ImageAndInformation from './ImageAndInformation';
import Overview from './Overview';
import './VisualContentApi.css';

const VisualContentApi = forwardRef((props, refVisualContent) => {
    function onScrollListHeader() {
        props.onActiveScroll(0, 35, 1900); //send to function in App.js
    }

    //section recive and show content API on screen 
    const [contentApi, setContentApi] = useState([]);

    const [selectedOptionOfUserMovieOrTvShow, setSelectedOptionOfUserMovieOrTvShow] = useState(''); 

    async function selectedOption(option) {
        setSelectedOptionOfUserMovieOrTvShow(option); //option return true or false, option === true = movie; option !== true = TvShows
    }
 
    async function content(actualContent) {
        setContentApi(actualContent);
    }

    useEffect(() => {
        if (typeof contentApi.videos === "object") {
            props.informationsOfVideos(contentApi.videos);
        }
    }, [contentApi, props]);

    useEffect(() => {
        if (typeof contentApi.title === "string" || typeof contentApi.name === "string") {
            props.titlesSendToReciveTitle(contentApi.title || contentApi.name || undefined); // to App.js using in AlredyWatched.js
        }
    },[contentApi.name, contentApi.title, props]);

    useEffect(() => {
        if (contentApi.poster_path !== '') {
            props.SendPathImageOfContent(contentApi.poster_path || undefined); // to App using in AlredyWatched.js
        }
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

    const [MessageError, setError] = useState(null);

    function activeError(errorFun) {
        setError(errorFun);
    }

    return (
      <div className="container-visual-content" ref={refVisualContent}>
        <ImageAndInformation
          title={
            selectedOptionOfUserMovieOrTvShow
            ? contentApi.title
            : contentApi.name
          }
          idContentRequestProvidersList={contentApi.id}
          image={contentApi.poster_path}
          reciveActivation={activeLoading}
          userOptionMovieOrTvShow={selectedOptionOfUserMovieOrTvShow}
        />
        <div className="sinopse-and-form">
          <Overview
            warningError={MessageError}
            overview={contentApi.overview}
          />
          <MoreInformationAboutContent
            yearOfContent={
              contentApi.length === 0
                ? ""
                : selectedOptionOfUserMovieOrTvShow === true
                ? contentApi.release_date
                : contentApi.first_air_date
            }
            verifyObejectEmpty={contentApi.length === 0 ? false : true}
            adultContent={selectedOptionOfUserMovieOrTvShow ? true : false}
            availableGenres={
              contentApi.genres === undefined
                ? (contentApi.genres = [])
                : contentApi.genres
            }
            userOptionMovieOrTvShow={selectedOptionOfUserMovieOrTvShow}
            timeOfDurationMovie={contentApi.runtime}
            numberOfEpisodes={contentApi.number_of_episodes}
            numberOfSeasons={contentApi.number_of_seasons}
          />
          <SendRequestApi
            onActiveScroll={onScrollListHeader}
            onActiveLoading={chargeTime}
            emptySelect={activeError}
            optionSelected={selectedOption}
            reciveContentApi={content}
          />
        </div>
      </div>
    );
});

export default VisualContentApi;