import { useState } from 'react';
import Api from '../services/Api';
import './SendRequestApi.css'

const SendRequestApi = (props) => {
    const pathApi = {
        Movies: {
            0:"/movie/top_rated?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-BR&page=",
            1:"/movie/popular?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-BR&page="
        },
        TvShows: {
            0:"/tv/popular?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-BR&page=",
            1:"/tv/top_rated?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-BR&page="
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

        const numberVariableRequstOfMovieAndTvShow = Math.floor(Math.random() * 2); //variable number for random choice of request of movie
        const ramdomNumberOfPageApiMovies = Math.floor(Math.random() * 135 + 1);
        const ramdomNumberOfPageApiTvShows = Math.floor(Math.random() * 90 + 1);
        const ramdomChoiceForResultsApi =  Math.floor(Math.random() * 20);

        if (selectedValue === '') {
            setErrorSelect('error'); 
            props.emptySelect('error');

        } else if (selectedValue === 'Movies') {
            props.optionSelected(true);
            props.onActiveLoading();


            if (numberVariableRequstOfMovieAndTvShow === 0) {
                getContentApi(ramdomNumberOfPageApiMovies, pathApi.Movies[0], ramdomChoiceForResultsApi);
            } else {
                getContentApi(ramdomNumberOfPageApiMovies, pathApi.Movies[1], ramdomChoiceForResultsApi);
            }
        } else {
            props.optionSelected(false);
            props.onActiveLoading();

            if (numberVariableRequstOfMovieAndTvShow === 0) {
                getContentApi(ramdomNumberOfPageApiTvShows, pathApi.TvShows[0], ramdomChoiceForResultsApi);
            } else {
                getContentApi(ramdomNumberOfPageApiTvShows, pathApi.TvShows[1], ramdomChoiceForResultsApi);
            }
        }
        props.onActiveScroll(0, 115, 900);
    }

    async function getContentApi(ramdomNumOfPage, pathApi, ramdomNumOfResultsReturnedApi) {
        await Api
        .get(`${pathApi}${ramdomNumOfPage}`)
        .then ((response) => {
            props.reciveContentApi(response.data.results[ramdomNumOfResultsReturnedApi])
        })
        .catch((err) => {
            // mensagem de: ops parece que nao conseguimos um filme para recomendar... Espere alguns segundos e tente novamente 
            console.error("ops! ocorreu um erro" + err);
            props.emptySelect('fetch-failed');
            setErrorSelect('fetch-failed');
        })
        
    } 



    return(
        <div className="container-send-request">
            <select className={errorSelect} defaultValue={selectedValue} onChange={selectChoiceUser} title="Campo de seleção entre filme ou série">
                <option value="" disabled title="Opção nula">Filme ou Série</option>
                <option value="TvShows" title="Série">Séries</option>
                <option value="Movies" title="Filme">Filmes</option>
            </select>
            <button type="button" onClick={ramdomNumberToComplementApi} title="Clique para receber sugestão aleatória">Obter Sugestão</button>
        </div>
    );
}

export default SendRequestApi;
