import { useEffect, useState, useRef } from 'react';
import './MoreInformationAboutContent.css';

export default function MoreInformationAboutContent(props) {
    const [runTimeMovieModified, setRunTimeMovieModified] = useState();
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

    function returnNumberOfSeasons() {
        if (props.numberOfSeasons === undefined || props.numberOfEpisodes === undefined) {
            return null
        } else {
            return <h3><strong>Temporadas: </strong>{ props.numberOfSeasons }</h3> 
        }
    }

    function returnNumberOfEpisodes() {
        if (props.numberOfSeasons === undefined || props.numberOfEpisodes === undefined) {
            return null
        } else {
            return <h3><strong>Episódios: </strong>{ props.numberOfEpisodes }</h3>
        }
    }

    const [valueRateFromUsers, setValueRateFromUsers] = useState(props.rateUsers);
    let formartValueRateFromUsers = String(props.rateUsers);

    useEffect(() => {
        let firtNumber = formartValueRateFromUsers[0];
        if (firtNumber === undefined) {
            firtNumber = '';
        }
        let secondNumber = formartValueRateFromUsers[2];
        if (secondNumber === undefined) {
            secondNumber = '';
        }

        setValueRateFromUsers(`${firtNumber}${secondNumber}%`)
        console.log(props.rateUsers);

    }, [formartValueRateFromUsers, props]);

    return (
      <div className="align-informations-content">
        {
            props.userOptionMovieOrTvShow === false
            ? returnNumberOfSeasons()
            : null
        }

        {
            props.userOptionMovieOrTvShow === false 
            ? returnNumberOfEpisodes()
            : props.timeOfDurationMovie !== undefined 
            ? <h3><strong>Duração: </strong> {runTimeMovieModified}</h3>
            : null
        }

        {
            props.rateUsers === ''
            ? null
            : <h3><strong>Aprovação: </strong>{valueRateFromUsers}</h3>
        }


        {props.yearOfContent !== "" ? (
          <h3 tabIndex="0" title={"Data de lançamento: " + props.yearOfContent}>
            <strong>Lançamento: </strong>
            {props.yearOfContent ? `${day}-${month}-${year}` : ""}
          </h3>
        ) : null}

{props.availableGenres.length > 0 ? (
          <h3>
            <strong>Genêro: </strong>
            {props.availableGenres.map((genres) => ` ${genres.name },`)}
          </h3>
        ) : null}


      </div>
    );
}