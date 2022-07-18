import './LoadingImage.css'

export default function LoadingImage(props) {
    let loading = '';

    if (props.activated === 'active') {
        loading = 'show';
    } else {
        loading = 'hide';
    }

    return(
        <div className={'container-loading ' + loading} title="Carregando capa do filme ou da série">
            <div className="loading-circle"></div>
            <div>
                <h3>Carregando</h3>
            </div>
        </div>
    );
}