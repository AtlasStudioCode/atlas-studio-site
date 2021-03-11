import React from 'react';

import './IconRow.css';

function IconRow({ href, src, alt, text }) {
    return (
        <a className="icon-row" href={href} target="_blank">
            <img
                className="icon-row-img"
                src={src}
                alt={alt} />
            <p className="icon-row-text">{text}</p>
        </a>
    );
}

export default IconRow;