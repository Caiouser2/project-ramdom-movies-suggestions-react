import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return(
        <footer>
            <h3>Feito com <span title="amor">❤️</span> para todos que adoram novas descobertas.</h3>
            <div className="align-informations">
                <ul className="side-one">
                    <li title="Passo a passo para usar site"><Link to="/como-usar-site">Como Usar</Link></li>
                    <li tabIndex="0" title="Informações importantes"><Link to="/informacoes-importantes">Informações Importantes</Link></li>
                    <li title="Clique para mandar uma sugestão a nós via gmail"><a href="mailto:ramdommoviecontact@gmail.com" rel="noreferrer" target="_blank">Mande ideias de melhorias</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://icons8.com/icon/ykhOFnBIQN8l/menu">Menu</a> <span>by</span> <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://icons8.com/icon/85165/play">Play</a> <span>by</span> <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a></li>
                </ul>
                <ul className="side-two">
                    <li tabIndex="0" title="Link que te envia para site do THE MOVIE DATABASE"><a target="_blank" href="https://www.themoviedb.org/" rel="noreferrer">Conheça: The Movie Database</a></li>
                    <li tabIndex="0" title="política de privacidade"><Link to="/politica-de-privacidade">Política de Privacidade</Link></li>
                    <li><a href="https://icons8.com/icon/101314/chevron-up" rel="noreferrer">Chevron Up</a> <span> by </span><a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a></li>
                    <li><a href="https://icons8.com/icon/99991/chevron-down" rel="noreferrer">Chevron Down</a> <span> by </span><a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a></li>
                </ul>
            </div>
        </footer>
    );
}

