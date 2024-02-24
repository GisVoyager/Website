import React from "react";
import Marquee from "react-fast-marquee";

const ReactMarquee = () => (
    <div>
        <h2 className="text-2xl text-gray-500 text-center font-bold py-4">Our industry partnerships</h2>
        <p className="text-gray-600 text-center pb-4">Our affiliations with industry leaders, accreditations, and partnerships speak volumes about our credibility and standing.</p>
        <hr />
        <Marquee pauseOnClick={true}>
            <img src="/images/partners/apple-pay.png" alt="Logo 1" className="h-32 w-auto py-2 px-8" />
            <img src="/images/partners/dhl.png" alt="Logo 3" className="h-32 w-auto py-2 px-8" />
            <img src="/images/partners/ebay.png" alt="Logo 4" className="h-32 w-auto py-2 px-8" />
            <img src="/images/partners/imdb.png" alt="Logo 5" className="h-32 w-auto py-2 px-8" />
            <img src="/images/partners/apple-pay.png" alt="Logo 1" className="h-32 w-auto py-2 px-8" />
            <img src="/images/partners/dhl.png" alt="Logo 3" className="h-32 w-auto py-2 px-8" />
            <img src="/images/partners/ebay.png" alt="Logo 4" className="h-32 w-auto py-2 px-8" />
        </Marquee>
        <hr />
    </div>
);

export default ReactMarquee;
