import React from 'react';
import './Podshows.css';

const Podshows = () => {
    return (
        <div className="MainPod">
            <div className="Title">
                <h1>Radar de novidades</h1>
                <h3>Confira os lançamentos dos melhores podcasts atualmente.</h3>
            </div>
            <div className="pods">
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/J7fCnBNWODw"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/vpq7MlBqssA"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/jONU1tRzzAw"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}

export default Podshows;