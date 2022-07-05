import { useState } from 'react';
import './PopUpAceptPrivacyPolicy.css';

export default function PopUpAceptPrivacyPolicy(props) {
    let popUpPrivacyPolicy = localStorage.getItem("pop-up"); //componente pop up so aparecera uma vez após confirmado
    localStorage.getItem("user-acept");
    const [classNamePopUp, setClassNamePopUp] = useState(popUpPrivacyPolicy);

    function hidePopUp() {
        setClassNamePopUp('hide');
        popUpPrivacyPolicy = localStorage.getItem("pop-up"); // pop up igual null quando click ele salva o valor hide
        popUpPrivacyPolicy = localStorage.setItem("pop-up", 'hide'); //hide é uma classe que some o elemento com display none
        localStorage.getItem("user-acept");
        localStorage.setItem("user-acept", 'acept'); // usúario concordou com as politicas de privacidade
    }

    return(
        <div className={'container-pop-up-policy ' + classNamePopUp}>
            <div className="text-warning" title="Aviso sobre política de privacidade">
                <h4>
                    Nós usamos cookies para fornecer ao usúario uma melhor experiência.
                    Ao continuar usando a pagína você aceita nossa <strong onClick={props.openPrivacyPlicy} title="Clique para abrir termos os termos da política de privacidade">política de privacidade</strong> .   
                </h4>
            </div>
            <div className="button-acept-and-policy">
                <button onClick={hidePopUp} title="Botão para aceitar política de privacidade">Entendido</button>
            </div>
        </div>
    );
}