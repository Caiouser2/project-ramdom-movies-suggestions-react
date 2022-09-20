import './Footer.css';

export default function Footer(props) {
    return(
        <footer>
            <h3 title="agradecimento pelo uso do site">Obrigado por usar nosso site<p>Feito com <span title="amor">❤️</span> para todos os apaixonados em novas descobertas.</p></h3>
            <div className="align-informations">
                <ul className="side-one">
                    <li tabIndex="0" title="Informações importantes acerca do site"><h5 onClick={() => {props.activeImportantsInformations(true);}} >Informações Importantes</h5></li>
                    <li title="Clique para relatar algum bug que você encontrou"><a href="mailto:ramdommoviecontact@gmail.com" rel="noreferrer" target="_blank">Encontrou algum bug ?</a></li>
                    <li title="Clique para mandar uma sugestão a nós via gmail"><a href="mailto:ramdommoviecontact@gmail.com" rel="noreferrer" target="_blank"> Tem alguma sugestão ?</a></li>
                </ul>
                <ul className="side-two">
                    <li tabIndex="0" title="Link que te envia para site do THE MOVIE DATABASE"><a target="_blank" href="https://www.themoviedb.org/" rel="noreferrer">Filmes e séries obtidos em: <p>THE MOVIE DATABASE</p></a></li>
                    <li tabIndex="0" onClick={props.visiblePrivacyPolicy} title="clique para abrir termos de política de privacidade">Política de Privacidade</li>
                </ul>
            </div>
        </footer>
    );
}

