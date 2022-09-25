import './MenuNav.css';

export default function MenuNav(props) {
    let width = window.innerWidth;

    function scrollHowUse() {
        setTimeout(() => {
            props.onActiveScroll(0, props.objPositionsComponents.positionHowUse, 1900);
            if (width < 895) {
                props.onCloseMenu('hide'); 
            }
        }, 100);
    }

    function scrollTrailer() {
        setTimeout(() => {
            props.onActiveScroll(0, props.objPositionsComponents.positionTrailer - 100, 1900);
            if (width < 895) {
                props.onCloseMenu('hide'); 
            } 
        }, 100);
    }

    function scrollAlredyWatched() {
        setTimeout(() => {
            props.onActiveScroll(0, props.objPositionsComponents.positionAlredyWatched - 60, 1900);
            if (width < 895) {
                props.onCloseMenu('hide'); 
            } 
        }, 100);
    }

    function scrollVisualContent() {
        setTimeout(() => {
            props.onActiveScroll(0, props.objPositionsComponents.positionVisualContentApi - 80, 2900);
            if (width < 895) {
                props.onCloseMenu('hide'); 
            } 
        }, 100);
    }

    return(
        <div>
            <nav className={"container-list " + props.onShowMenu}>
                <ul >
                    <li tabIndex="0" onClick={scrollHowUse}>Como usar</li>
                    <li tabIndex="0" onClick={scrollTrailer}>Trailer</li>
                    <li tabIndex="0" onClick={scrollAlredyWatched}>Assistidos recentemente</li>
                    <li tabIndex="0" onClick={scrollVisualContent}>Obter sugestão</li>
                </ul>
            </nav>
        </div> 
    );
}