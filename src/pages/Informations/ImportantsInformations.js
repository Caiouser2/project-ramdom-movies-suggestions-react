import {Link} from 'react-router-dom';
import "./ImportantsInformations.css";

export default function ImportantsInformations() {
  return (
    <div className="background-form">
      <div className="top-logo">
        <h1 title="RAMDOM MOVIES SUGGESTION">RAMDOM MOVIES SUGGESTIONS</h1>
      </div>
      <div className="text-informations">
        <h2>Informações Importantes</h2>
        <p> Nosso site nâo tem ligação direta com o THE MOVIE DATABASE, apenas
          utilizamos as informações acerca dos filmes e séries quais são
          disponibilizados pela base de dados quais eles são donos e detêm todos
          os direitos. Não gerenciamos totalmente os contéudos que são
          apresentados, pois obtemos cada em deles de forma aleatória, sem
          termos a capacidade de filtrar tudo que é sugerido, para que se
          mantenha a principal funcionalidade do site, que é dar sugestões de
          filmes e séries de forma que não seja previsíveis os resultados
          sugeridos ao usuário.</p>
          <br/>
          <p>
            Não nos responsabilizamos por qualquer informação incorreta, ou
            contéudo inapropiado acerca dos filmes ou séries, dado o motivo de
            utilizarmos o serviço de terceiros, e não termos pleno controle sobre o que será
            sugerido.
          </p>
          <br/>
          <p>
            No ato da sugestão de filmes ou séries não temos controle sobre a
            classificação indicativa que o contéudo faz parte, por isso
            salientamos que antes de assistir qualquer filme ou série verifique 
            a classificação indicativa e certifique-se de que você
            faz parte do grupo livre a assistir o que lhe foi
            sugerido. Caso você nâo faça parte do grupo, pedimos que faça o clique no botão novamente 
            e busque uma nova
            sugestão de contéudo para assistir. Caso você decida assitir o filme
            ou série tendo em vista que você não se enquadra no perfil da
            classificação indicativa recomendada, assista ciente que nós não nos
            reponsabilizamos por quaisquer danos causados a sua pessoa ao
            infringir nosso pedido.
          </p>
          <br/>
          <p>
            Caso seja encontrado no site algo que não condiz com filmes e
            séries, ou que fuja da propsta de pleno entretenimento, tais como:
            campanha política, contéudo de exploração infantil, contéudo de
            exploração animal, discurso de ódio, intolerância religiosa, etc.
            Pedimos que por favor entre em contato com nosso canal de
            atendimeto, para que nossa equipe busque entender o problema e entre
            com as cabíveis medidas para soluciná-lo.
          </p>
      </div>
      <div className="link-inicial-page">
        <Link to="/"><span>Voltar para pagína inicial</span></Link>
      </div>
    </div>
  );
}
