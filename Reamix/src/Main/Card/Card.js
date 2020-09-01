import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="Card">
            <div className="Card-element">
                <iframe
                    title="Watermelon-Sugar"
                    src="https://www.youtube.com/embed/E07s5ZYygMg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true">
                </iframe>
                <h1>Watermelon Sugar | Harry Styles</h1>
            </div>
            <div className="Card-element">
                <iframe
                    title="Bang"
                    src="https://www.youtube.com/embed/4THFRpw68oQ"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true">
                </iframe>
                <h1>Bang! | AJR</h1>
            </div>
        </div>
    )
}

export default Card;