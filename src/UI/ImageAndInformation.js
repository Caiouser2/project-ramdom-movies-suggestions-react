import './ImageAndInformation.css';
import LoadingImage from '../components/LoadingImage';  

const ImageAndInformation = props => {
    const mainUrlImage = "https://image.tmdb.org/t/p/original/";


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
                <img src={mainUrlImage + props.image} alt="Capa do Filme. Leia a sinospe para compreender o contexto da capa"/>
                <LoadingImage activated={props.reciveActivation}/>
            </div>

            <div className="release-date-and-adult-content">                
                <h3 tabIndex="0" title={'Indicador de contéudo adulto: talvez contenha'}>Contéudo adulto:
                    {
                        props.verifyObejectEmpty
                        ? props.adultContent ? ' Pode conter em alguma brevê cena' : ' Pode conter em algum brevê episódio cena' 
                        :''
                    }
                </h3>
                <h3 tabIndex="0" title={'Data de lançamento: ' + props.yearOfContent}>
                    Lançamento: { props.yearOfContent ? props.yearOfContent : ' Não informado'}
                </h3>
            </div>
        </div>
    );
}
export default ImageAndInformation;