import React from 'react';

export default function Avartar({ image, isNew }) {
    return (
        <div className="avater">
            <img className="img" src={image} alt="avartar" />
            {isNew && <span className="newtag">New</span>}
        </div>
    );
}
