import './ImportantsInformations.css'

export default function ImportantsInformations(props) {
    let visibleImportantsInformations = 'importants-informations ';

    if (props.importantsInformations === false) {
        visibleImportantsInformations += 'hide';
        //false hide warnig true show
    } else {
        visibleImportantsInformations += 'show';
    } 

    return(
        <div className={visibleImportantsInformations} onClick={() => {props.unActiveImportantsInformations(false)}} title="Clique em qualquer lugar fora do pop up para fechar">
            <div className="align-button" title="Botão para fechar poup-up de informações importantes">
                <div className="button-cancel" onClick={() => {props.unActiveImportantsInformations(false)}}>
                    <h1>X</h1>
                </div>
            </div>
            <h3 title="Informações importantes acerca do contéudo do site">
            Nosso site nâo tem ligação direta com o
            THE MOVIE DATABASE, apenas utilizamos
            as informações acerca dos filmes e séries
            quais são disponibilizados pela base de dados quais eles são donos e detêm todos os direitos.
            Não gerenciamos totalmente os contéudos que são apresentados, pois 
            obtemos cada em deles de forma aleatória, sem termos a capacidade
            de filtrar tudo que é sugerido, para que se mantenha a principal
            funcionalidade do site, que é dar sugestões de filmes e séries de forma 
            que não seja previsíveis os resultados sugeridos ao usuário. 
            <br></br>
            <br/>
            <p>
                Não nos responsabilizamos por qualquer informação
                incorreta, ou contéudo inapropiado acerca dos
                filmes ou séries, dado o motivo de utilizarmos o serviço,
                e não termos pleno controle sobre o que será sugerido.
            </p>
            <br></br>
            <p>
                No ato da sugestão de filmes ou séries não temos controle
                sobre a classificação indicativa que o contéudo faz parte, 
                por isso salientamos que se a princípio for plenamente notável
                que você não faz parte do grupo classificativo livre a assistir o que lhe foi sugerido, pedimos que faça 
                o clique no botão e busque uma nova sugestão de contéudo para assistir, caso você decida 
                assitir o filme ou série tendo em vista que você não se enquadra no perfil da classificação indicativa recomendada,
                assista ciente dos aviso que lhe foi dado, por sua própia conta e risco. Nós não nos reponsabilizamos por quaisquer danos causados a sua pessoa
                ao infringir nosso pedido.     
              </p>
              <br></br>
              <p>
                Caso seja encontrado no site algo que não condiz com
              filmes e séries, ou que fuja da propsta de pleno entretenimento,
              tais como: campanha política, contéudo de exploração infantil, contéudo de exploração animal,
              discurso de ódio, intolerância religiosa, etc.
              Pedimos que por favor entre em contato com nosso 
              canal de atendimeto, para que nossa equipe busque entender o problema 
              e entre com as cabíveis medidas para soluciná-lo.
              </p>
            </h3>
        </div>
    );
}

