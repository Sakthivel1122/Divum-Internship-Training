import axios from "axios";
import React, { useEffect, useState } from "react";

const TestAxious = (props) => {
    const[state, setState] = useState(null);

    useEffect(() => {
        axios.get(props.url).then(res => setState(res.data));
    },[]);

    return(
        <div>
            {state ? <p data-testid="title">{state.title}</p> : <p>Loading...</p>}
        </div>
    );
}

export default TestAxious;