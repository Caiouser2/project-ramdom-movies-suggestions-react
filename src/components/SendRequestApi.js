import { useState } from 'react';
import Api from '../services/Api';
import './SendRequestApi.css'

const SendRequestApi = (props) => {
    const pathApiContentMoviesAndTvShows = {
        Movies: {
            0:"/movie/top_rated?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-br&page=",
            1:"/movie/popular?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-br&page="
        },
        TvShows: {
            0:"/tv/top_rated?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-BR&page=",
            1:"/tv/popular?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-BR&page="
        }
    }

    const [selectedValue, setSelectedValue] = useState('');

    const selectChoiceUser = (e) => {
        setSelectedValue(e.target.value);
        setErrorSelect(null);
        props.emptySelect(null);
    }

    const [errorSelect, setErrorSelect] = useState(null);

    function ramdomNumberToComplementApi() {
        let ramdomNumberOfPageForApiMoviesAndTvShowPopular = Math.floor(Math.random() * 370); //variable number for random choice of request of movie
        if (ramdomNumberOfPageForApiMoviesAndTvShowPopular === 0) {
            ramdomNumberOfPageForApiMoviesAndTvShowPopular = Math.floor(Math.random() * 370);
        }
        
        let ramdomNumberOfPageApiTvShowsTopRated = Math.floor(Math.random() * 127);
        if (ramdomNumberOfPageApiTvShowsTopRated === 0) {
            ramdomNumberOfPageApiTvShowsTopRated = Math.floor(Math.random() * 127);
        }
        const numberVariableRequstOfMovieAndTvShow = Math.floor(Math.random() * 2); //variable number for random choice of request of movie
        const ramdomChoiceForResultsApi =  Math.floor(Math.random() * 19);

        if (selectedValue === '') {
            setErrorSelect('error'); 
            props.emptySelect('error');
        } else if (selectedValue === 'Movies') {
            props.optionSelected(true);
            props.onActiveLoading();

            if (numberVariableRequstOfMovieAndTvShow === 0) {
                getContentApi(ramdomNumberOfPageForApiMoviesAndTvShowPopular, pathApiContentMoviesAndTvShows.Movies[0], ramdomChoiceForResultsApi);
            } else {
                getContentApi(ramdomNumberOfPageForApiMoviesAndTvShowPopular, pathApiContentMoviesAndTvShows.Movies[1], ramdomChoiceForResultsApi);
            }
        } else {
            props.optionSelected(false);
            props.onActiveLoading();

            if (numberVariableRequstOfMovieAndTvShow === 0) {
                getContentApi(ramdomNumberOfPageApiTvShowsTopRated, pathApiContentMoviesAndTvShows.TvShows[0], ramdomChoiceForResultsApi);
            } else {
                getContentApi(ramdomNumberOfPageForApiMoviesAndTvShowPopular, pathApiContentMoviesAndTvShows.TvShows[1], ramdomChoiceForResultsApi);
            }
        }
    }

    async function getContentApi(ramdomNumOfPage, pathApi, ramdomNumOfResultsReturnedApi) {
        await Api
        .get(`${pathApi}${ramdomNumOfPage}`)
        .then ((response) => {
            if (response.data.results[ramdomNumOfResultsReturnedApi].adult === true || response.data.results[ramdomNumOfResultsReturnedApi].overview === '') {
                return ramdomNumberToComplementApi();
            } else {
                props.reciveContentApi(response.data.results[ramdomNumOfResultsReturnedApi]);
                setTimeout(() => {props.onActiveScroll()}, 100);
                
                props.emptySelect(null);
                setErrorSelect(null);
            }
        })
        .catch((err) => {
            props.reciveContentApi({title: 'Ocorreu um erro', name:'Ocorreu um erro'});
            props.emptySelect('fetch-failed');
            setErrorSelect('fetch-failed');
        })
    } 



    return(
        <div className="container-send-request">
            <select className={errorSelect} defaultValue={selectedValue} onChange={selectChoiceUser} title="Campo de seleção entre filme ou série">
                <option value="" disabled title="Opção nula">Filme ou Série</option>
                <option value="Movies" title="Filme">Filmes</option>
                <option value="TvShows" title="Série">Séries</option>
            </select>
            <button type="button" onClick={ramdomNumberToComplementApi} title="Clique para receber sugestão aleatória">Obter Sugestão</button>
        </div>
    );
}

export default SendRequestApi;
