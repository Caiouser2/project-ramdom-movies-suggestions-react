import './ImportantsInformations.css'

export default function ImportantsInformations(props) {
    let visibleImportantsInformations = 'importants-informations ';

    if (props.importantsInformations === false) {
        visibleImportantsInformations += 'hide';
        //false hide warnig true show
    } else {
        visibleImportantsInformations += 'show';
    } 

    function sendValue() {
        props.unActiveImportantsInformations(false);
    }

    // function showWarnig() {
    //     props.activeWarning(false);
    //     console.log(props.activeWarning);
    // }

    return(
        <div className={visibleImportantsInformations}>
            <div className="align-button" title="Botão para fechar poup-up de informações importantes">
                <div className="button-cancel" onClick={sendValue}>
                    <h1>X</h1>
                </div>
            </div>
            <h3 title="Informações importantes acerca do contéudo do site">
            Nosso site nâo tem ligação direta com o
            THE MOVIE DATABASE, apenas utilizamos
            as informações acerca dos filmes e Séries
            quais são disponibilizados por eles.
            Não gerenciamos totalmente os contéudos que são apresentados, 
            apenas obtemos cada em deles de forma aleatória e apresentamos em nosso site.
            <br></br>
            <br/>
            <p>
                Não nos responsabilizamos por qualquer informação
                incorreta, ou contéudo inapropido acerca dos
                filmes ou séries, dado o motivo de apenas utilizarmos o serviço,
                e não termos pleno controle sobre o contéudo.
            </p>
            <br></br>
            <p>
                No ato da sugestão de filmes ou séries não temos controle
                sobre a classificação indicativa que o contéudo faz parte, 
                por isso salientamos que se a princípio for plenamente notável
                que você não faz parte do grupo classificativo pedimos que faça 
                o clique no botão e busque uma nova sugestão de contéudo para assistir, caso você decida 
                assitir o filme ou série tendo em vista que você não se enquadra no perfil da classificação indicativa,
                assista ciente dos aviso que lhe foi dado, por sua própia conta e risco. Nós não nos reponsabilizamos por quaisquer danos causados a sua pessoa
                ao infringir nosso solene pedido.     
              </p>
              <br></br>
              <p>
                Caso seja encontrado algo que não condiz com
              filmes e séries, ou que fuja da propsta de pleno entretenimento,
              pedimos que por favor entre em contato com nosso 
              canal de atendimeto, para que nossa equipe busque entender o problema 
              e entre com as cabíveis medidas para soluciná-lo.
              </p>
            </h3>
        </div>
    );
}

