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
            <h2 tabIndex="0" title="Sinopse">Sinopse</h2>
            <h3 tabIndex="0" className={errorSelectEmpty} title={'Sinopse da obra:' + props.overview}>
                {
                    props.warningError === 'error'
                    ? 'Ops... você precisa escolher uma opção entre filme ou série.'
                    : props.warningError === 'fetch-failed'
                    ? 'Ops... parece que nosso serviço está indisponível no momento, agurade alguns segundos e tente novamente.'
                    :
                    props.overview === undefined
                    ? 'Ainda não temos a sinopse desse contéudo, Clique no botão (Obter sugestão) para receber uma sugestão aleatória.'
                    : props.overview === ''
                    ? 'Perdão ainda nâo temos a sinopse. Mas como pedido de desculpas queremos que você clique denovo e receba uma nova sugestão mais decente. Mas caso prefira continuar a escolha é toda sua.'
                    : props.overview 
                }

            </h3>
        </div>
    );
} 

export default Overview;