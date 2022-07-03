import { useEffect } from 'react';
import './VerticalAds.css';

export default function VerticalAds() {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    })

    return(
        <div className="container-vertical-ads">
            <ins className="adsbygoogle ads2"
                style={{display:"block"}}
                data-ad-client="ca-pub-2223260589081465"
                data-ad-slot="5580248054"
                data-ad-format="auto"
                data-adtest="on"
                data-full-width-responsive="true"></ins>
        </div>
    );
}