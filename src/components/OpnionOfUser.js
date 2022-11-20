import { React, forwardRef, useState } from 'react';
import './OpnionOfUser.css';

const OpnionOfUser = forwardRef((props, refPositionDiv) => {
    const [hideForm, setHideForm] = useState(false);

    function returnIframeForm() {
        return <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeHjepNBReQJj3Je9RKrd8EzZqdDdMzysfgYvUjrTD4rbipWA/viewform?embedded=true" id="iframe-form" title="iframe-form-google" width="78%" height="350px"  frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
    }

    return(
        <div className="align-form" ref={refPositionDiv}>
            <h2>Diga-nos o que achou da sugestão:</h2>
            {
                hideForm === true
                ? returnIframeForm()
                : null
            }
            
            <div className="align-buttons">
                <button id="button-1" onClick={() => {setHideForm(true)}}>Sim</button>
                <button id="button-2" onClick={() => {setHideForm(false)}}>Não</button>
            </div>
        </div>
    );
});

export default OpnionOfUser;
