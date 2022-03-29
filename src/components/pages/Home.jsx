import React, { useEffect, useState } from 'react';

const Home = () => {

    const [creatures, setCreatures] = useState();

    useEffect(() => {
        fetch("https://localhost:7221/api/creatures", {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=utf-8"
            }
        }).then(response => response.json())
          .then(json => setCreatures(json));
    }, []);

    return (
        <>
            Home
        </>
    );
}

export default Home;