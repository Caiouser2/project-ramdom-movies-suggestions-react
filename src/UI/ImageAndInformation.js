import WatchSuggestedContent from '../components/WatchSuggestedContent';
import './ImageAndInformation.css';
import LoadingImage from '../components/LoadingImage';  
import { useEffect, useState } from 'react';

const ImageAndInformation = props => {
    const mainUrlImage = "https://image.tmdb.org/t/p/original";
    const [runTimeMovieModified, setRunTimeMovieModified] = useState();
    
    function returnImage() {
        return <img src={mainUrlImage + props.image} alt="Perdão, devido algum erro não conseguimos a capa do contéudo sugerido" border="0"/>
    }


    //section format date
    let date = props.yearOfContent;

    if (props.yearOfContent === undefined) {
        date = '';
    }
    
    let year = '';
    let month = '';
    let day = '';

    if (props.adultContent === true || props.adultContent === false) {
        year = date.substr(0, 4); //props.adultContent verify if the returned content is movie or tv show, therefore when
        month = date.substr(5, 2); //props.adultContent returned any value is executed the transform of variable date
        day = date.substr(8, 2);
    } 

    useEffect(() => {
        if (props.timeOfDurationMovie > 60) {
            let counterHoursOfMvie = 0;
            let countMinutesOfMovie = props.timeOfDurationMovie;

            do {
                countMinutesOfMovie = countMinutesOfMovie - 60;
                counterHoursOfMvie = counterHoursOfMvie +1;
            } while (countMinutesOfMovie > 60); 
            
            setRunTimeMovieModified(`${counterHoursOfMvie}h ${countMinutesOfMovie}min`);
        } else {
            setRunTimeMovieModified(`${props.timeOfDurationMovie}min`);
        }

    }, [props.timeOfDurationMovie]);

    function returnNumberOfSeasonsAndEpisodes() {
        if (props.numberOfSeasons === undefined || props.numberOfEpisodes === undefined) {
            return null
        } else {
            return  <h3>{ 'Número de temporadas: ' + props.numberOfSeasons }<p>{ 'Número de episódios: ' + props.numberOfEpisodes }</p></h3>
        }
    }

    return(
        <div className="image-and-informations">
            <h2 tabIndex="0" title={props.title}>
                {
                    props.title
                    ? props.title
                    : 'Descubra...' 
                }
            </h2>

            <div className="container-image" tabIndex="0">
                {
                    props.image === undefined
                    ? null
                    : props.image === ''
                    ? 'Perdão ainda não temos a capa do contéudo que sugerimos'
                    : returnImage()
                }
                <LoadingImage activated={props.reciveActivation}/>
            </div>

            <div className="release-date-and-adult-content">
                <WatchSuggestedContent 
                UrlImages={mainUrlImage}
                sendRequest={ typeof props.userOptionMovieOrTvShow !== "boolean" ? null : props.userOptionMovieOrTvShow }
                id={typeof props.idContentRequestProvidersList !== "number" ? null : props.idContentRequestProvidersList}
                />
                {
                    props.userOptionMovieOrTvShow === false
                    ? returnNumberOfSeasonsAndEpisodes()
                    : props.timeOfDurationMovie !== undefined
                    ? <h3>{ `Duração: ${runTimeMovieModified}` }</h3> 
                    : null
                }

                {
                    props.availableGenres.length > 0 ? <h3>Genêro: { props.availableGenres.map((genres) => `${genres.name}, `) }</h3> : null 
                }

                {
                    props.yearOfContent !== '' 
                    ? <h3 tabIndex="0" title={'Data de lançamento: ' + props.yearOfContent}>Lançamento: { props.yearOfContent ? `${day}-${month}-${year}` : ''}</h3>
                    : null
                }


            </div>
        </div>
    );
}
export default ImageAndInformation;