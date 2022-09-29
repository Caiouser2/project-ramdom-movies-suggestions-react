import WatchSuggestedContent from '../components/WatchSuggestedContent';
import './ImageAndInformation.css';
import LoadingImage from '../components/LoadingImage';  

const ImageAndInformation = props => {
    const mainUrlImage = "https://image.tmdb.org/t/p/original";
    
    function returnImage() {
        return <img src={mainUrlImage + props.image} alt="Perdão, devido algum erro não conseguimos a capa do contéudo sugerido" border="0"/>
    }

    return (
      <div className="image-and-informations">
        <h2 tabIndex="0" title={props.title}>
          {props.title ? props.title : "Descubra..."}
        </h2>

        <div className="container-image" tabIndex="0">
          {props.image === undefined
            ? null
            : props.image === ""
            ? "Perdão ainda não temos a capa do contéudo que sugerimos"
            : returnImage()}
          <LoadingImage activated={props.reciveActivation} />
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