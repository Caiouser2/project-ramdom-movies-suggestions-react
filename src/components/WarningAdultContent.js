import {useState} from 'react'
import './WarningAdultContent.css';

export default function WarningAdultContent() {
    let warning = localStorage.getItem("warning") //initial value undefined

    const [activeWarning, setActiveWarning] = useState(warning);

    function hideWarning() {
        warning = localStorage.setItem("warning", 'hide'); //quando recebe o click altera o valor undenfided para hide
        warning = localStorage.getItem("warning"); //o valor vai continuar sempre assim pois ficará salvo no local storage 
        setActiveWarning(warning);
    }

    return(
        <div className={'warning-adult-content ' + activeWarning}>
            <h4>
                Antes de assistir qualquer filme ou série que foi lhe foi sugerido, 
                verifique a classificação indicativa e certifique-se que você
                faz parte do grupo permitido. Para mais informações ler (INFORMAÇÕES IMPORTANTES) no fim da pagína.
            </h4>
            <div className="container-cancel-pop-up-adult-content">
                <h2 onClick={hideWarning}>X</h2>
            </div>
        </div>
    );    
}