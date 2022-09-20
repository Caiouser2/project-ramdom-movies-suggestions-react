import WatchSuggestedContent from '../components/WatchSuggestedContent';
import './ImageAndInformation.css';
import LoadingImage from '../components/LoadingImage';  

const ImageAndInformation = props => {
    const mainUrlImage = "https://image.tmdb.org/t/p/original";
    //section get genre
    let arrResultFilterGenres = [];
    let genres = [
        {id: 28, name: 'Ação'},
        {id: 12, name: 'Aventura'},
        {id: 16, name: 'Animação'},
        {id: 35, name: 'Comédia'},
        {id: 80, name: 'Crime'},
        {id: 99, name: 'Documentário'},
        {id: 18, name: 'Drama'},
        {id: 10751, name: 'Família'},
        {id: 14, name: 'Fantasia'},
        {id: 36, name: 'História'},
        {id: 27, name: 'Terror'},
        {id: 10402, name: 'Música'},
        {id: 9648, name: 'Mistério'},
        {id: 10749,name: 'Romance'},
        {id: 878, name: 'Ficção científica'},
        {id: 10770, name: 'Cinema TV'},
        {id: 53, name: 'Thriller'},
        {id: 10752, name: 'Guerra'},
        {id: 37, name: 'Faroeste'},
        {id: 10759, name: 'Ação, Aventura'},
        {id: 10762, name: 'Infantil'},
        {id: 10763, name: 'Notícia'},
        {id: 10764, name: 'Reality'},
        {id: 10765, name: 'Sci-Fi, Fantásia'},
        {id: 10766, name: 'Soap'},
        {id: 10767, name: 'Talk'},
        {id: 10768, name: 'Geurra, Política'},
    ]

    for (let countGenresReturnedApi in props.idGenre) {
        function filterResultsEqual(arrGenres) {
            if (arrGenres.id === props.idGenre[countGenresReturnedApi]) {
                return true;
            }
        }

        function executeFilter() {
            let newArrGenres = genres.filter(filterResultsEqual);
            arrResultFilterGenres.push(newArrGenres[0].name);
        }
        executeFilter()
    }

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

    return(
        <div className="image-and-informations">
            <h2 tabIndex="0" title={'nome do filme ou série: ' + props.title}>
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
                sendRequest={typeof props.activeRequestProvidersList !== "boolean" ? null : props.activeRequestProvidersList}
                id={typeof props.idContentRequestProvidersList !== "number" ? null : props.idContentRequestProvidersList}/>

                {
                    props.activeRequestProvidersList === false
                    ? <h3>{'Número de temporadas: ' + props.numberOfSeasons }<p>{ 'Número de episódios: ' + props.numberOfEpisodes }</p></h3> 
                    : null
                }

                <h3 tabIndex="0" title={'Data de lançamento: ' + props.yearOfContent}>
                    Lançamento: { props.yearOfContent ? `${day}-${month}-${year}` : ''}
                </h3>

                <h3> Genêro: { arrResultFilterGenres !== true ? arrResultFilterGenres.map((genres) => ` ${genres},`) : 'Não informado'} </h3>
            </div>
        </div>
    );
}
export default ImageAndInformation;