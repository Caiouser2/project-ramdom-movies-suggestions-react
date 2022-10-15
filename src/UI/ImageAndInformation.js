import { useState } from 'react';
import WatchSuggestedContent from '../components/WatchSuggestedContent';
import './ImageAndInformation.css';
import LoadingImage from '../components/LoadingImage';  

const ImageAndInformation = props => {
  const [classvisibilityWarningBackground, setClassVisibilityWarningBackground] = useState(null);
  const [classvisibilityWarningPharse, setClassVisibilityWarningPharse] = useState(null);

  const mainUrlImage = "https://image.tmdb.org/t/p/original";

    function ShowAndHideWarning() {
      if (classvisibilityWarningPharse === 'null') {
        setClassVisibilityWarningBackground('');
        setClassVisibilityWarningPharse('');
      } else if (classvisibilityWarningPharse === 'show-initial') {
        setClassVisibilityWarningBackground('');
        setClassVisibilityWarningPharse('hide');
      } else {
        setClassVisibilityWarningBackground('background-and-border-warning');
        setClassVisibilityWarningPharse('show-initial');
      }

    }

    function hidePopUpTrailer() {
      props.setTrueForHideComponentTrailer(true);
    }

    // detect when api has video for show to user

    function returnDivThatShowIconForWatchTrailer() {
      if (props.informationsAboutVideos === undefined) {
        return null; //change value contentApi.videos when === undefined
      } else if (props.informationsAboutVideos.results.length === 0) {
        return null;
      } else {
        return (
          <div className="align-div-watch-trailer">
            <div onClick={hidePopUpTrailer} className="div-open-PopUp-trailer" title="veja o trailer"></div>
          </div>
        ) 
      }
    }

    return (
      <div className="image-and-informations">
        <h2 tabIndex="0" title={props.title}>
          {props.title ? props.title : "Descubra..."}
        </h2>

        <div className="container-image"  tabIndex="0">
          <div className="align-container-warning">
            <div className={"container-warning " + classvisibilityWarningBackground}>
              <span onClick={ShowAndHideWarning} title="aviso">⚠️</span> <span className={classvisibilityWarningPharse}>VERIFIQUE A CLASSIFICAÇÃO INDICATIVA ANTES DE ASSITIR</span>
            </div>
          </div>
          {
            returnDivThatShowIconForWatchTrailer()
          }


          {
            props.image !== undefined
            ? <img src={mainUrlImage + props.image} alt="Capa" border="0"/>
            : null
          }
          <LoadingImage activated={props.reciveActivation}/>
        </div>

        <div>
          <WatchSuggestedContent
            UrlImages={mainUrlImage}
            sendRequest={
              typeof props.userOptionMovieOrTvShow !== "boolean"
              ? null
              : props.userOptionMovieOrTvShow
            }
            id={
              typeof props.idContentRequestProvidersList !== "number"
              ? null
              : props.idContentRequestProvidersList
            }
          />
        </div>
      </div>
    );
}
export default ImageAndInformation;