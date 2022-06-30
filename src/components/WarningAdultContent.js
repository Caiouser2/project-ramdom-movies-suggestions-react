import './WarningAdultContent.css';

export default function WarningAdultContent() {
    let warningUser = localStorage.getItem("warningUser");
    let warning = '';

    const hideWarningUser = () => {
        warningUser = localStorage.setItem("warningUser", "enabled");
        warningUser = localStorage.getItem("warningUser");
    }

    if (warningUser === 'enabled') {
        warningUser = localStorage.getItem("warningUser");
        warning = 'hide';
    }

    return(
        <div className={'warning-adult-content ' + warning}>
            <h4>
                Antes de assistir qualquer filme ou série que foi lhe foi sugerido, 
                verifique a classificação indicativa e certifique-se que você
                faz parte do grupo permitido. Para mais informações ler (INFORMAÇÕES IMPORTANTES) no fim da pagína.
            </h4>
            <h2 onClick={hideWarningUser}>X</h2>
        </div>
    );    
}