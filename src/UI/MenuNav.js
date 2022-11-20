import { React, forwardRef } from 'react';
import './MenuNav.css';

const MenuNav = forwardRef((props, getActualClassInDiv) => {
    function scrollOpnionOfUser() {
        setTimeout(() => {
            props.onActiveScroll(0, props.objPositionsComponents.positionOpnionOfUser, 1900);
            props.onCloseMenu(''); 
        }, 100);
    }

    function scrollAlredyWatched() {
        setTimeout(() => {
            props.onActiveScroll(0, props.objPositionsComponents.positionAlredyWatched - 130, 1900);
            props.onCloseMenu(''); 
        }, 100);
    }

    function scrollVisualContent() {
        setTimeout(() => {
            props.onActiveScroll(0, props.objPositionsComponents.positionVisualContentApi - 80, 2900);
            props.onCloseMenu(); 
        }, 100);
    }

    return(
        <div>
            <nav ref={getActualClassInDiv} className={"container-list " + props.onShowMenu}>
                <ul>
                    <li tabIndex="0" onClick={scrollOpnionOfUser}>Avalie o filme ou a série que assistiu</li>
                    <li tabIndex="0" onClick={scrollAlredyWatched}>Assistidos recentemente</li>
                    <li tabIndex="0" onClick={scrollVisualContent}>Obter sugestão</li>
                </ul>
            </nav>
        </div> 
    );
})

export default MenuNav;