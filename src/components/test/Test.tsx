import React from "react"

import TestImage from ""

interface Props {}

const Test : React.FC<Props> = () => {
    return (
        <div>
            <div>Test</div>
            <div>
                <img src="/assets/images/vercel.svg" />
            </div>
        </div>
    );
}

export default Test