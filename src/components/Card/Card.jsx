import React from "react";

import { CardView } from "./CardView";

export default function Card({bookName, imgUrl, small}) {

    return (
        <CardView 
            width={ small? 11.5 : 17 }
            height={ small? 15 : 22.5 }
        >
            <h3>{ bookName? bookName : "undefined" }</h3>
            <img src={imgUrl} />
        </CardView>
    );
}
