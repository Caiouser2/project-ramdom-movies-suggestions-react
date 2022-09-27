import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer(props) {
    return(
        <footer>
            <h3 title="agradecimento pelo uso do site"><p>Feito com <span title="amor">❤️</span> para todos os apaixonados em novas descobertas.</p></h3>
            <div className="align-informations">
                <ul className="side-one">
                    <li title="Clique para relatar algum bug que você encontrou"><Link to="/como-usar-site">Como Usar</Link></li>
                    <li tabIndex="0" title="Informações importantes"><Link to="/informacoes-importantes">Informações Importantes</Link></li>
                    <li title="Clique para mandar uma sugestão a nós via gmail"><a href="mailto:ramdommoviecontact@gmail.com" rel="noreferrer" target="_blank"> Tem alguma sugestão ?</a></li>
                </ul>
                <ul className="side-two">
                    <li tabIndex="0" title="Link que te envia para site do THE MOVIE DATABASE"><a target="_blank" href="https://www.themoviedb.org/" rel="noreferrer">Filmes e séries obtidos em: <p>THE MOVIE DATABASE</p></a></li>
                    <li tabIndex="0" title="política de privacidade"><Link to="/politica-de-privacidade">Política de Privacidade</Link></li>
                </ul>
            </div>
        </footer>
    );
}

