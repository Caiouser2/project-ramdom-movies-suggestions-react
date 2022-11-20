import { React, useState } from "react";
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
    const minValueToPageApi = Math.ceil(1);
    const maxValueToPageApi = Math.floor(60);
    const ramdomNumberForSendPageToRequestOnApi = Math.floor(Math.random() * (maxValueToPageApi - minValueToPageApi) + minValueToPageApi); //ramdom numer to page on request

    const numberVariableRequstOfMovieAndTvShow = Math.floor(Math.random() * 2); //variable number for random choice of request of movie
    const minValueForChoiceOnList = Math.ceil(0);
    const maxValueForChoiceOnList = Math.floor(19);
    const choiceOneObjectOnListBetweenTwentyResults = Math.floor(Math.random() * (maxValueForChoiceOnList - minValueForChoiceOnList) + minValueForChoiceOnList);

    if (selectedValue === "") {
      setErrorSelect("error");
      props.emptySelect("error");
    } else if (selectedValue === "Movies") {
      props.optionSelected(true);
      props.onActiveLoading();

      if (numberVariableRequstOfMovieAndTvShow === 0) {
        getIdForSecondRequest(
          ramdomNumberForSendPageToRequestOnApi,
          pathApiContentMoviesAndTvShows.Movies[0],
          choiceOneObjectOnListBetweenTwentyResults
        );
      } else {
        getIdForSecondRequest(
          ramdomNumberForSendPageToRequestOnApi,
          pathApiContentMoviesAndTvShows.Movies[1],
          choiceOneObjectOnListBetweenTwentyResults
        );
      }
    } else {
      props.optionSelected(false);
      props.onActiveLoading();

      if (numberVariableRequstOfMovieAndTvShow === 0) {
        getIdForSecondRequest(
          ramdomNumberForSendPageToRequestOnApi,
          pathApiContentMoviesAndTvShows.TvShows[0],
          choiceOneObjectOnListBetweenTwentyResults
        );
      } else {
        getIdForSecondRequest(
          ramdomNumberForSendPageToRequestOnApi,
          pathApiContentMoviesAndTvShows.TvShows[1],
          choiceOneObjectOnListBetweenTwentyResults
        );
      }
    }
  }

  async function getIdForSecondRequest(ramdomNumOfPage, pathApi, ramdomNumberOfResultsReturnedApi) {
    await Api.get(`${pathApi}${ramdomNumOfPage}`)
      .then((response) => {
        if (response.data.results[ramdomNumberOfResultsReturnedApi].adult === true || response.data.results[ramdomNumberOfResultsReturnedApi].overview === "") {
          ramdomNumberToComplementApi();
        } else {
          if (selectedValue === "Movies") {
            SecondRequestOfInformations('movie', response.data.results[ramdomNumberOfResultsReturnedApi].id);
          } else {
            SecondRequestOfInformations('tv', response.data.results[ramdomNumberOfResultsReturnedApi].id);
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
