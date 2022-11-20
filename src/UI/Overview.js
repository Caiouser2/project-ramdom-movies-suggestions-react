import { React } from 'react';
import './Overview.css';

const Overview = props => {
    let errorSelectEmpty = '';

    if (props.warningError === 'error') {
        errorSelectEmpty = 'error';
    } else if (props.warningError === 'fetch-failed') {
        errorSelectEmpty = 'fetch-failed';
    } else {
        errorSelectEmpty = '';
    }         

    return(
        <div className="overview ">
            <h2 tabIndex="0" title="Sinopse">Informações</h2>
            <h3 tabIndex="0" className={errorSelectEmpty} title="Sinopse da obra">
                <strong>Sinopse: </strong> 
                {
                    props.warningError === 'error'
                    ? ' Ops... você precisa escolher uma opção entre filme ou série.'
                    : props.warningError === 'fetch-failed'
                    ? ' Ops... parece que nosso serviço está indisponível no momento, agurade alguns segundos e tente novamente.'
                    : props.overview === undefined
                    ? ' Clique no botão (Obter sugestão) para receber uma sugestão aleatória do que assistir.'
                    : props.overview === ''
                    ? ' Perdão ainda nâo temos a sinopse. Mas como pedido de desculpas queremos que você clique denovo e receba uma nova sugestão.'
                    : props.overview 
                }
            </h3>
        </div>
    );
} 

export default Overview;