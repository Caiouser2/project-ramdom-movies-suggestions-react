import { useEffect } from 'react';
import './HorizontalAds.css';

export default function HorizontalAds() {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    })

    return(
        <div className="container-horizontal-ads">
            <ins className="adsbygoogle"
            // style={{windowWidth}}
            data-ad-client="ca-pub-2223260589081465"
            data-ad-slot="8344096474"
            data-ad-format="auto"
            data-adtest="on"
            data-full-width-responsive="true"></ins>

            <ins className="adsbygoogle"
            // style={{windowWidth}}
            data-ad-client="ca-pub-2223260589081465"
            data-ad-slot="6570061368"
            data-ad-format="auto"
            data-adtest="on"
            data-full-width-responsive="true"></ins>
        </div>
    );

}