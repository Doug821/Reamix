import React from 'react';
import './Categories.css';

const Categories = () => {
    return (
        <div className="Categories">
            <div className="Info">
                <h1>Músicas recomendadas</h1>
                <h3 id="h3">Um pouco de tudo, para alegrar seu dia.</h3>
            </div>
            <div className="Music-grid">
                <iframe
                    src="https://www.youtube.com/embed/hT_nvWreIhg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true">
                </iframe>
                <iframe
                    src="https://www.youtube.com/embed/bg1sT4ILG0w"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true">
                </iframe>
                <iframe
                    src="https://www.youtube.com/embed/IcrbM1l_BoI"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true">
                </iframe>
                <iframe
                    src="https://www.youtube.com/embed/UtF6Jej8yb4"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true">
                </iframe>
                <iframe
                    src="https://www.youtube.com/embed/PIh2xe4jnpk"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true">
                </iframe>
                <iframe
                    src="https://www.youtube.com/embed/pXRviuL6vMY"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true">
                </iframe>
            </div>
        </div>
    )
}

export default Categories;