import { useState } from 'react';
import VisualContentApi from './UI/VisualContentApi';
import Footer from './UI/Footer';
import ImportantsInformations from './components/ImportantsInformations';
import WarningAdultContent from './components/WarningAdultContent';
import PrivacyPolicy from './components/PrivacyPolicy';
import PopUpAceptPrivacyPolicy from './UI/PopUpAceptPrivacyPolicy';
import Trailer from './components/Trailer';
import Api from './services/Api';
import './App.css';

function App() {
  //section pop up inportants informations
  const [showAndHideImportantsInformations, setShowAndHideImportantsInformations] = useState(false); 
  
  function showImportantsInformations(show) {
    setShowAndHideImportantsInformations(show); //send true or for component ImportantsInformations 
  }

  function hideImportantsInformations(hide) {
    setShowAndHideImportantsInformations(hide); //send false for component ImportantsInformations  
  }

  //section pop up privacy policy 
  const [visibilityPrivacyPolicy, setVisibilityPrivacyPolicy] = useState('hide');


  function showPrivacyPlicy() {
    setVisibilityPrivacyPolicy('show');
  }

  function hidePrivacyPlicy() {
    setVisibilityPrivacyPolicy('hide');
  }
 
  //section get videos: trailers, behind the cenes etc... and send for Trailer
  let optionUser = '';

  function reciveSelectedOption(valueBoolean) {
    optionUser = valueBoolean; //return true when movie is selected and false when tv show is selected
  }

  const pathVideos = '/videos?api_key=cc95f3c6dd41a11be17d581b9ec3f1f9&language=pt-BR';

  const [contentReturnedApiVideo, setContentReturnedApiVideo] = useState({results: []});

  function reciveId(recivedId) {
    getVideo(recivedId, optionUser);
  }  

  function getVideo(ids, optionUserBoolean) {

    if (optionUserBoolean === true) {
      getVideosApi('movie/', ids,  pathVideos);
    } else if (optionUserBoolean === false) {
      getVideosApi('tv/', ids,  pathVideos);
    }
  }

  function getVideosApi(optionUser, id, path) {
    Api 
    .get(`${optionUser}${id}${path}`)

    .then((response) => {
        setContentReturnedApiVideo(response.data)
    })
    .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    })
  }

  const [titleContent, setTitleContent] = useState('');

  function reciveTitle(title) {
    if (typeof title === "string") {
      setTitleContent(title);
    }
  }

  return (
    <div>
      <header>
        <h1 
        title="Nome do site: RAMDOM MOVIES SUGGESTION"
        >RAMDOM MOVIES SUGGESTIONS</h1>
      </header>
      <WarningAdultContent/>
      <VisualContentApi titlesSentToReciveTitle={reciveTitle} returnedId={reciveId} selectedMovieorTvShow={reciveSelectedOption}/>
      <ImportantsInformations importantsInformations={showAndHideImportantsInformations} unActiveImportantsInformations={hideImportantsInformations}/>
      <PrivacyPolicy openCardPrivacyPolicy={showPrivacyPlicy} closeCardPrivacyPolicy={hidePrivacyPlicy} activeCard={visibilityPrivacyPolicy}/>
      <PopUpAceptPrivacyPolicy openPrivacyPlicy={showPrivacyPlicy}/>
      <div className="container-arrow-trailer">
        <div className="arrow-trailer"></div>
        <div className="arrow-trailer"></div>
      </div>
      <Trailer titles={titleContent} videos={contentReturnedApiVideo}/>
      <Footer visiblePrivacyPolicy={showPrivacyPlicy} activeImportantsInformations={showImportantsInformations}/>
    </div>

  );
}

export default App;
