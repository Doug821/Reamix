import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="Banner">
            <img src="http://i3.ytimg.com/vi/7wtfhZwyrcc/maxresdefault.jpg" alt="Thumbnail" />
            <iframe
                title="Believer"
                src="https://www.youtube.com/embed/7wtfhZwyrcc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true">
            </iframe>
        </div>
    )
}

export default Banner;