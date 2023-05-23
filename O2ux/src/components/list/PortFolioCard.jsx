import React from 'react';

export default function PortFolioCard({ id, image, title, year, category }) {
    return (
        <li className="port-folio-item">
            <div className="img-box">
                <img src={image} alt={title} className="card-thumbnail" />
            </div>
            <div className="title-box">
                <p className="year">{year}</p>
                <h3 className="title">{title}</h3>
            </div>
            <div className="category-box">
                {category.map((cat, index) => (
                    <span key={index} className={`category category-${index}`}>
                        {cat}
                    </span>
                ))}
            </div>
        </li>
    );
}
