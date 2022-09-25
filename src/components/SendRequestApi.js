import { useState } from "react";
import Api from "../services/Api";
import "./SendRequestApi.css";

const SendRequestApi = (props) => {
  const pathApiContentMoviesAndTvShows = {
    Movies: {
      0: "/movie/top_rated?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-br&page=",
      1: "/movie/popular?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-br&page=",
    },
    TvShows: {
      0: "/tv/top_rated?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-BR&page=",
      1: "/tv/popular?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-BR&page=",
    },
  };

  const [selectedValue, setSelectedValue] = useState("");

  const selectChoiceUser = (e) => {
    setSelectedValue(e.target.value);
    setErrorSelect(null);
    props.emptySelect(null);
    };

  const [errorSelect, setErrorSelect] = useState(null);

  function ramdomNumberToComplementApi() {
    let ramdomNumberOfPageForApiMoviesAndTvShowPopular = Math.floor(
      Math.random() * 370
    ); //variable number for random choice of request of movie
    if (ramdomNumberOfPageForApiMoviesAndTvShowPopular === 0) {
      ramdomNumberOfPageForApiMoviesAndTvShowPopular = Math.floor(
        Math.random() * 370
      );
    }

    let ramdomNumberOfPageApiTvShowsTopRated = Math.floor(Math.random() * 127);
    if (ramdomNumberOfPageApiTvShowsTopRated === 0) {
      ramdomNumberOfPageApiTvShowsTopRated = Math.floor(Math.random() * 127);
    }
    const numberVariableRequstOfMovieAndTvShow = Math.floor(Math.random() * 2); //variable number for random choice of request of movie
    const ramdomChoiceForResultsApi = Math.floor(Math.random() * 19);

    if (selectedValue === "") {
      setErrorSelect("error");
      props.emptySelect("error");
    } else if (selectedValue === "Movies") {
      props.optionSelected(true);
      props.onActiveLoading();

      if (numberVariableRequstOfMovieAndTvShow === 0) {
        getIdForSecondRequest(
          ramdomNumberOfPageForApiMoviesAndTvShowPopular,
          pathApiContentMoviesAndTvShows.Movies[0],
          ramdomChoiceForResultsApi
        );
      } else {
        getIdForSecondRequest(
          ramdomNumberOfPageForApiMoviesAndTvShowPopular,
          pathApiContentMoviesAndTvShows.Movies[1],
          ramdomChoiceForResultsApi
        );
      }
    } else {
      props.optionSelected(false);
      props.onActiveLoading();

      if (numberVariableRequstOfMovieAndTvShow === 0) {
        getIdForSecondRequest(
          ramdomNumberOfPageApiTvShowsTopRated,
          pathApiContentMoviesAndTvShows.TvShows[0],
          ramdomChoiceForResultsApi
        );
      } else {
        getIdForSecondRequest(
          ramdomNumberOfPageForApiMoviesAndTvShowPopular,
          pathApiContentMoviesAndTvShows.TvShows[1],
          ramdomChoiceForResultsApi
        );
      }
    }
  }

  async function getIdForSecondRequest(ramdomNumOfPage, pathApi, ramdomNumOfResultsReturnedApi) {
    await Api.get(`${pathApi}${ramdomNumOfPage}`)
      .then((response) => {
        if (response.data.results[ramdomNumOfResultsReturnedApi].adult === true || response.data.results[ramdomNumOfResultsReturnedApi].overview === "") {
          ramdomNumberToComplementApi();
        } else {
          if (selectedValue === "Movies") {
            console.log(response.data.results[ramdomNumOfResultsReturnedApi]);
            SecondRequestOfInformations('movie', response.data.results[ramdomNumOfResultsReturnedApi].id);
          } else {
            console.log("serie");
            SecondRequestOfInformations('tv', response.data.results[ramdomNumOfResultsReturnedApi].id);
          }
        }
      })
      .catch((err) => {
        props.reciveContentApi({
          title: "Ocorreu um erro",
          name: "Ocorreu um erro",
        });
        props.emptySelect("fetch-failed");
        setErrorSelect("fetch-failed");
      });
  }

  function SecondRequestOfInformations(typeOfContentMovieOrTvShow, id) {
    Api.get(`/${typeOfContentMovieOrTvShow}/${id}?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&append_to_response=videos&language=pt-BR`)
      .then((response) => {
        console.log(response.data);
        props.reciveContentApi(response.data);

        setTimeout(() => {
          props.onActiveScroll();
        }, 100);

        props.emptySelect(null);
        setErrorSelect(null);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  return (
    <div className="container-send-request">
      <select
        className={errorSelect}
        defaultValue={selectedValue}
        onChange={selectChoiceUser}
        title="Campo de seleção entre filme ou série"
      >
        <option value="" disabled title="Opção nula">
          Filme ou Série
        </option>
        <option value="Movies" title="Filme">
          Filmes
        </option>
        <option value="TvShows" title="Série">
          Séries
        </option>
      </select>
      <button
        type="button"
        onClick={ramdomNumberToComplementApi}
        title="Clique para receber sugestão aleatória"
      >
        Obter Sugestão
      </button>
    </div>
  );
};

export default SendRequestApi;
