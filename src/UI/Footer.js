import './Footer.css'

export default function Footer(props) {

    function showImportantsInformations() {
        props.activeImportantsInformations(true);
    }

    return(
        <footer>
            <h3>DESCUBRA NOVOS FILMES, ASSISTA SÉRIES QUE VOCÊ NEM CONHECIA, E MERGULHE NESSE MUNDO DE NOVAS DESCOBERTAS!
            </h3>
            <div className="align-informations">
                <ul>
                    <li tabIndex="0" title="Informações importantes acerca do site"><h5 onClick={showImportantsInformations} >INFORMAÇÕES IMPORTANTES</h5></li>
                    <li title="Clique para relatar algum bug que você encontrou"><a href="mailto:ramdommoviecontact@gmail.com">Encontrou algum bug ?</a></li>
                    <li title="Clique para mandar uma sugestâo a nós via gmail"><a href="mailto:ramdommoviecontact@gmail.com"> Tem alguma sugestão ?</a></li>
                </ul>
                <ul>
                    <li title="Link que te envia para site do THE MOVIE DATA BASE"><a href="https://www.themoviedb.org/">Filmes e séries obtidos em: <p>THE MOVIE DATABASE</p></a></li>
                </ul>
            </div>
        </footer>
    );
}

