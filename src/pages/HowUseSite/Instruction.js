import { Link } from 'react-router-dom';
import './Instruction.css';

export default function Instruction() {
    return (
      <div>
        <div className="top-logo">
          <h1 title="RAMDOM MOVIES SUGGESTION">RAMDOM MOVIES SUGGESTIONS</h1>
        </div>
        <nav className="container-instruction">
          <h2>COMO RECEBER A SUGESTÃO:</h2>
          <ol>
            <li>Abra o campo de seleção e escolha entre filme ou série.</li>
            <br />
            <li>Clique em Obter sugestão.</li>
            <br />
            <li>
              Ao receber a sugestão leia a sinopse e veja as informações de:
              genêro, lançamento, duração e número de episódios para séries. Se
              gostar da sugestão clique em assistir agora, se não clique
              novamente em Obter sugestão.
            </li>
            <br/>
            <li>
              Para assistir o contéudo sugerido clique em assitir agora, você
              será redirecionado ao site do The Moive Database. Nele você poderá
              escolher que serviço de streaming usar para assitir o filme ou a
              série sugerida.
            </li>
            <br/>
            <li>
              Depois de já ter assitido retorne ao site e de sua opnião
              sobre o que achou do filme ou da série que lhe foi sugerido. 
              Isso ajuda a entendermos se nossas sugestões estão sendo boas!
            </li>
          </ol>
        </nav>
        <div className="link-inicial-page-in-instruction">
        <Link to="/"><span>Voltar para pagína inicial</span></Link>
      </div>
      </div>
    );
}